import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import { Redirect } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import { headers } from '../../constants/common';
import Event from './../Basic/Event';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        activaPage: 1,
        itemsPerPage: 3,
        totalItems: 0,
        rangeDisplay: 4
      },
      redirect: false,
      events: [],
      originalEvents: [],
      categories: [],
      locations: [],
    };
    this.getEvent = this.getEvent.bind(this);
    this.eventRsvp = this.eventRsvp.bind(this);
  }
    // A function that gets all events existing in the system
    // This enables a new user to view all events
    getEvent = () => {
      // Make API call
      axios({
        method: 'get',
        url: 'https://bright-events-api.herokuapp.com/api/v2/events/all',
        headers
      }).then((resp) => {
        const categories = resp.data.map(event => event.category);
        const locations = resp.data.map(event => event.location);
        // Set various states
        this.setState({
          events: resp.data,
          pagination: { ...this.state.pagination, totalItems: resp.data.length },
          categories,
          locations,
          originalEvents: resp.data
        });
      });
    }
    // Filter events existing in the system.
    // Receives two parameters to use in the search
    filter = (type, query) => {
      if (query === 'Filter By Location' || query === 'Filter By Category') {
        this.setState({
          events: [...this.state.originalEvents]
        });
      } else {
        switch (type) {
          case 'location':
            this.setState({
              events: this.state.events.filter(event => event.location === query)
            });
            break;
          case 'category':
            this.setState({
              events: this.state.events.filter(event => event.category === query)
            });
            break;
          default:
            break;
        }
      }
    }
    // A method to search events
    onSearchChange = (event) => {
      const { originalEvents } = this.state;
      this.setState({
        events: originalEvents.filter(myEvent => myEvent.name.includes(event.target.value))
      });
    }
    // A method to make an RSVP call to the API, uses the event ID
    // to identify which event is being referred to
    eventRsvp = (eventId) => {
      const head = { ...headers, Authorization: localStorage.getItem('Token') };
      axios({
        method: 'post',
        url: `https://bright-events-api.herokuapp.com/api/v2/event/${eventId}/rsvp`,
        headers: head,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        this.getEvent();
      }).catch((err) => {
        toast.error(err.response.data.message);
      });
    }

    onChange = (event) => {
      const myState = this.state;
      myState.form[event.target.name] = event.target.value;
      this.setState(myState);
    }
    onClick = (e) => {
      console.log("we've got something running", e);
    }
    onPageChange = (pageNumber) => {
      console.log('the current page is ', pageNumber);
      this.setState({ activePage: pageNumber });
    }

    onInputChange = (event) => {
      const myState = this.state;
      myState.event.target.name = event.target.value;
      this.setState(myState);
    }
    // Getting all events after the site has loaded
    componentDidMount() {
      this.getEvent();
    }
    render() {
      const { events } = this.state;
      // State Destructuring

      if (this.state.redirect) {
        return (<Redirect to={'/login'}/>);
      }

      return (
        <div className="container page-content">

        <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={3000}
        />

        <div className="row container" style={{ marginTop: 100 }}>
        <div className="col-md-12">
        <MediaQuery minDeviceWidth={700}>
          {(matches) => {
          if (matches) {
            return <div className="row">
            <div className="col-md-8">
              { this.state.events.map(event =>
                <Event key={event.id} event={event} onRsvp={this.eventRsvp}/>)
              }
            </div>
            <div className="col-md-4 second-child ">
            <div className="panel panel-success" id="heading">
            <div className="panel-heading">Filter Events</div>
            <div className="panel-body">
            <div className="input-group">
              <input type="text" className="form-control" aria-label="..." placeholder="Search" onChange={ this.onSearchChange } />
              <div className="input-group-btn">
                          <button className="btn btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                      </div>
              </div>
              <br />
            <select className="form-control" onChange={e => this.filter('category', e.target.value)}>
            <option>Filter By Category</option>
            {
              events.map((event, i) => <option key={i}
              value={event.category}>{event.category}</option>)
            }
            </select>
            <br/>
            <select className="form-control" onChange={e => this.filter('location', e.target.value)}>
              <option>Filter By Location</option>
              {
                events.map((event, i) => <option key={i} value={event.location}>{event.location}
                </option>)
              }
            </select>
              </div>
            </div>
            </div>
        </div>;
          }
            return <div className="row">
              <div className="col-md-4 second-child">
                <div className="panel panel-success" id="heading">
                <div className="panel-heading">Filter Events</div>
                <div className="panel-body">
                <div className="input-group">
                <input type="text" className="form-control" aria-label="..." placeholder="Search" onChange={ this.onSearchChange } />
                <div className="input-group-btn">
                          <button className="btn btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                      </div>
                </div>
                <br />
                <select className="form-control" onChange={e => this.filter('category', e.target.value)}>
                <option>Filter By Category</option>
                {
                events.map((event, i) => <option key={i}
                value={event.category}>{event.category}</option>)
                }
                </select>
                <br/>
                <select className="form-control" onChange={e => this.filter('location', e.target.value)}>
                <option>Filter By Location</option>
                {
                events.map((event, i) => <option key={i} value={event.location}>{event.location}
                </option>)
                }
                </select>
                </div>
                </div>
                </div>
                <div className="col-md-8">
                { this.state.events.map(event =>
                <Event key={event.id} event={event} onRsvp={this.eventRsvp}/>)
                }
                </div>
              </div>;
        }}
      </MediaQuery>
        </div>
        </div>
         <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.pagination.itemsPerPage}
          totalItemsCount={this.state.pagination.totalItems}
          pageRangeDisplayed={this.state.pagination.rangeDisplay}
          onClick={this.handlePageChange}
        />
        </div>
      );
    }
}

export default Events;
