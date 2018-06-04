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
      categories: [],
      locations: [],
      originalEvents: []
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
      console.log('the type is ', type, query);
      const { events } = this.state;
      const orig = Object.assign([], this.state.originalEvents);
      this.setState({ events: orig });
      if (type === 'location') {
        console.log('events is ', this.state.events);
        const filteredEvents = events.filter(event => event.location === query);
        this.setState({ events: filteredEvents });
      }
    }

    eventRsvp = (eventId) => {
      axios({
        method: 'post',
        url: `http://localhost:8000/api/v2/event/${eventId}/rsvp`,
        headers: { Authorization: localStorage.getItem('Token') },
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

    componentWillMount() {
      this.getEvent();
    }
  // Now you can check if the component updates itself ()
    render() {
      const { form, categories, locations } = this.state;
      // State Destructuring


      if (this.state.redirect) {
        return (<Redirect to={'/login'}/>);
      }


      return (
        <div className="container page-content">
        <br />
        <br />
        <br />
        <br />
        <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={3000}
        />
        <div className="row container">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
            {this.state.events.map(event =>
            <Event key={event.id} event={event} onRsvp={this.eventRsvp}/>)}
            </div>
            <div className="col-md-4 second-child">
            <div className="panel panel-success">
            <div class="panel-heading">Filter Events</div>
  <div className="panel-body">
  <select className="form-control" onChange={e => this.filter('category', e.target.value)}>
  <option selected>Filter By Category</option>
  <option value="Service Provider">Service Provider</option>
  {
    categories.map((category, i) => <option key={i} value={category}>{category}</option>)
  }
</select>
<br/>
<select className="form-control" onChange={e => this.filter('location', e.target.value)}>
  <option selected>Filter By Location</option>
  {
    locations.map((location, i) => <option key={i} value={location}>{location}</option>)
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
