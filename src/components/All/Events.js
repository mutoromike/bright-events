import React, { Component } from 'react';
import Dialog from 'react-bootstrap-dialog';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { headers } from '../../constants/common';
import Event from './../Basic/Event';


class Events extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      redirect: false,
      events: [],
      originalEvents: [],
      categories: [],
      locations: [],
    };
    this.getEvent = this.getEvent.bind(this);
    this.eventRsvp = this.eventRsvp.bind(this);
  }
    getEvent = () => {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/v2/events/all',
        headers
      }).then((resp) => {
        const categories = resp.data.map(event => event.category);
        const locations = resp.data.map(event => event.location);

        this.setState({
          events: resp.data,
          categories,
          locations,
          originalEvents: resp.data
        });
      });
    }
    filter = (type, query) => {
      console.log('type', type);

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

    onSearchChange = (event) => {
      const { originalEvents } = this.state;
      this.setState({
        events: originalEvents.filter(myEvent => myEvent.name.includes(event.target.value))
      });
    }

    eventRsvp = (eventId) => {
      const head = { ...headers, Authorization: localStorage.getItem('Token') };
      axios({
        method: 'post',
        url: `http://localhost:8000/api/v2/event/${eventId}/rsvp`,
        headers: head,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        this.getEvent();
      }).catch((err) => {
        toast.error(err.response.data.message);
      });
    }
    onClick() {
      this.dialog.show({
        body: 'Create Event',
        prompt: Dialog.TextPrompt({ placeholder: 'Event Name' }),
        actions: [
          Dialog.CancelAction(),
          Dialog.OKAction((dialog) => {
            // const result = dialog.value
            // action(`okay! result is "${result}".`)()
          })
        ]
      });
    }
    onChange = (event) => {
      const myState = this.state;
      myState.form[event.target.name] = event.target.value;
      this.setState(myState);
    }

    onInputChange = (event) => {
      const myState = this.state;
      myState.event.target.name = event.target.value;
      this.setState(myState);
    }

    componentDidMount() {
      this.getEvent();
    }
  // Now you can check if the component updates itself ()
    render() {
      const {
        form, categories, locations, events
      } = this.state;
      // State Destructuring

      console.log('current events', events);

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
          <div className="row">
            <div className="col-md-8">

              { this.state.events.map(event =>
                <Event key={event.id} event={event} onRsvp={this.eventRsvp}/>)
              }
            </div>
            <div className="col-md-4 second-child">
            <div className="panel panel-success">
            <div class="panel-heading">Filter Events</div>
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
        </div>
        </div>
        </div>
        </div>
      );
    }
}

export default Events;
