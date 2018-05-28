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
        // console.log('these are new', resp.data);
        this.setState({
          events: resp.data
        });
      });
    }
    eventRsvp = (eventId) => {
      axios({
        method: 'post',
        url: `http://localhost:8000/api/v2/event/${eventId}/rsvp`,
        headers,
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
      const { form } = this.state;
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

            <div className="col-md-8">
            {this.state.events.map(event =>
            <Event key={event.id} event={event} onRsvp={this.eventRsvp}/>)}
            </div>
        </div>


        </div>

        </div>
      );
    }
}

export default Events;
