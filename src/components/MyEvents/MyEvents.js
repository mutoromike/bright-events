import React, { Component } from 'react';
import Dialog from 'react-bootstrap-dialog';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { headers } from '../../constants/common';
import Event from './../Created/Event';


class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      redirect: false,
      events: [],
      form: {
        name: '',
        category: '',
        location: '',
        date: '',
        description: ''
      }
    };
    this.getEvent = this.getEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }
    createEvent = (event) => {
      event.preventDefault(); // prevent form auto-reloads
      // console.log('Event: Form Submit', this.usernameInput.value);
      // axios.get('https://bright-events-api.herokuapp.com/api/v2/auth/register')
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v2/events',
        headers,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        this.getEvent();
      }).catch((err) => {
        toast.error(err.response.data.message);
      });
    }
    deleteEvent = (eventId) => {
      axios({
        method: 'delete',
        url: `http://localhost:8000/api/v2/events/${eventId}`,
        headers,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        this.getEvent();
      }).catch((err) => {
        toast.error(err.response.data.message);
      });
    }
    getEvent = () => {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/v2/events',
        headers
      }).then((resp) => {
        // console.log('these are new', resp.data);
        this.setState({
          events: resp.data
        });
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
    // componentDidMount() {
    //   this.getEvent();
    // }
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
            <Event key={event.id} event={event} onDelete={this.deleteEvent}/>)}
            </div>


            <div className="col-md-4">
            <div className="col-md-3">
                    {/* panel panel-success */}
                            {/* Button trigger modal */}
                            {/* Create new event */}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#flipFlop">
                        Create New
                        </button>

                        {/* The modal  */}
                        <div className="modal fade" id="flipFlop" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title" id="modalLabel">Create Event</h4>
                        </div>
                        <div className="modal-body">

                        {/* panel-heading */}
                        <div style={{ paddingTop: 30 }} className="panel-body">
                        <form id="loginform" className="form-horizontal" onSubmit= { this.createEvent }>

                            <div style={{ marginBottom: 25 }} className="input-group ">
                                <span className="input-group-addon">
                                </span>
                                <input type="text" name='name' className="form-control"
                                onChange = {this.onChange} placeholder="Event Name" required />
                            </div>

                            <div style={{ marginBottom: 25 }} className="input-group ">
                                <span className="input-group-addon">
                                </span>
                                <input type="text" name='category' className="form-control"
                                onChange = {this.onChange} placeholder="Category" required />
                            </div>

                            <div style={{ marginBottom: 25 }} className="input-group ">
                                <span className="input-group-addon">
                                </span>
                                <input type="text" name='location' className="form-control"
                                onChange = {this.onChange} placeholder="Location" required />
                            </div>

                            <div style={{ marginBottom: 25 }} className="input-group ">
                                <span className="input-group-addon">
                                </span>
                                <input type="date" name='date' className="form-control"
                                onChange = {this.onChange} placeholder="Date" required />
                            </div>

                            <div style={{ marginBottom: 25 }} className="input-group ">
                                <div className="input-group-addon">
                                </div>
                                <textarea type="text" name='description' className="form-control"
                                onChange = {this.onChange} placeholder="Description" required >
                                </textarea>
                            </div>


                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-8 col-sm-offset-4">
                                        <input type="submit" className="btn btn-primary" value="Create Event"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                        </div>
                        </div>
                    {/* panel success */}
                </div>

           </div>
        </div>


        </div>

        </div>
      );
    }
}

export default MyEvents;

