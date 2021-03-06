import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import facebook from '../../assets/img/facebook.png';
import linkedIn from '../../assets/img/linkedIn.png';
import { headers } from '../../constants/common';
import EventMap from './../Map/EventMap';
import EditEventModal from './EditorModal';
import VisitorList from './VisitorList';


const defaultCoordinates = { lat: -1.2195470, lng: 36.8862530 };
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showRsvpModal: false,
      message: '',
      form: {
        name: props.name,
        category: props.category,
        location: props.location,
        date: props.date,
        description: props.description
      },
      event: [],
      users: []
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.getRsvpList = this.getRsvpList.bind(this);
  }
  // Method that allows an authenticated user to edit their own events
  // Gets the event details from a child component "EditorModal" and
  // uses the event ID to know which event is being edited
  editEvent = (e, event) => {
    const head = { ...headers, Authorization: localStorage.getItem('Token') };
    e.preventDefault(); // prevent form auto-reloads
    axios({
      method: 'put',
      url: `https://bright-events-api.herokuapp.com/api/v2/events/${event.id}`,
      headers: head,
      data: event
    }).then((resp) => {
      this.onModalClose();
      toast.success(resp.data.message);
      this.props.onGet();
    }).catch((err) => {
      toast.error(err.response.data.message);
    });
  }
  // Method to fetch a list of visitors attending a specific event
  // by using an event id to know which event is being called
  getRsvpList(eventId) {
    const head = { ...headers, Authorization: localStorage.getItem('Token') };
    axios({
      method: 'get',
      url: `https://bright-events-api.herokuapp.com/api/v2/event/${eventId}/rsvp`,
      headers: head
    }).then((resp) => {
      this.setState({
        users: [...resp.data]
      });
    }).catch((err) => {
      toast.error('Please log in!');
    });
  }

  inputChanged(e) {
    const { value, name } = e.target;
    this.setState({ form: Object.assign({}, ...this.state.form, { [name]: value }) });
  }

  // Method used to close react modals after they have popped up
  // and all actions completed
  onModalClose() {
    this.setState({ showModal: false });
    this.setState({ showRsvpModal: false });
  }
  render() {
    const {
      event, onDelete
    } = this.props;
    return (
        <div className="panel panel-success" id="heading">
        <div className="panel-heading">
            <h2 className="panel-title">{event.name}</h2>
        </div>
        {/* panel-heading */}


        <table className="table table-hover" id="activity-table">
            <thead>
                <tr className="row">
                    <th>Category</th>
                    <th>Venue</th>
                    <th>Happening on</th>
                </tr>
            </thead>
            <tbody>
                    <tr className="row">
                        <td className="col-md-4 col-xs-12">
                            <div className="form-group">
                                {event.category}
                            </div>
                        </td>
                        <td className="col-md-4 col-xs-12">
                            <div className="form-group">
                                {event.location}
                            </div>
                        </td>
                        <td className="col-md-4 col-xs-12">
                            <div className="form-group">
                                {event.date}
                            </div>
                        </td>
                    </tr>

            </tbody>
            </table>
        <table className="table table-hover" id="activity-table">
            <tbody>
            <tr className="row">
                <td className="col-md-4 col-xs-12">
                    <div className="form-group">
                    <h5>
                        More Details
                    </h5>
                        {event.description}
                    </div>
                </td>
                    <td className="col-md-8 hidden-xs">
                        <div style={{ width: '25.000em', height: '15.625em', paddingRight: 0 }}>
                        <EventMap coordinates = {defaultCoordinates} />
                        </div>
                    </td>
            </tr>
            <tr className="row">
                <td className="col-md-8 col-xs-12">
                    Share
                    <img style={{ height: '3.125em', width: '4.688em' }} alt="facebook" src={facebook}/>
                    <img style={{ height: '1.750em', width: '1.750em' }} alt="linkedIn" src={linkedIn}/>
                </td>
                <td className="col-md-4 col-xs-12">
                    <h5>
                        <div>
                    <input type="submit" ref="register-submit" id="password-reset-submit"
                    className="col-md-3 btn-primary pull-right" value="Rsvp List" style={{ borderRadius: 3 }}
                    onClick={() => {
                        this.setState({ showRsvpModal: true });
                        this.getRsvpList(event.id);
                        }}/>
                    </div>
                    {
                            this.state.showRsvpModal &&
                            <VisitorList onClose={this.onModalClose} event={event}
                            key={event.id} users={this.state.users}/>

                        }
                    {/* Button trigger modal */}
                        {/* Edit icon */}
                        <i onClick={() => this.setState({ showModal: true })}
                        className="glyphicon glyphicon-edit pull-right" style={{ marginRight: '4%' }}
                        />
                        {/* The modal  */}
                        {
                            this.state.showModal &&
                            <EditEventModal onClose={this.onModalClose} event={event}
                            key={event.id} onEdit={this.editEvent} users={this.state.users}/>
                        }


                        <div className="iconSize">
                        <a>
                        <i className="glyphicon glyphicon-trash pull-right" data-toggle="modal"
                        style={{ marginRight: '4%' }} data-target="#deleteEvent"></i>
                        </a>
                        </div>
                        <div className="modal fade" id="deleteEvent" tabIndex="-1" role="dialog" aria-labelledby="deleteEventLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteEventLabel">Delete Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you wish to delete this event?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <a onClick = {() => onDelete(event.id)}>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>


                    </h5>

                </td>
            </tr>
            </tbody>
        </table>

                </div>
    );
  }
}


export default Event;
