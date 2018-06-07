import React from 'react';
import facebook from '../../assets/img/facebook.png';
import linkedIn from '../../assets/img/linkedIn.png';
import EventMap from './../Map/EventMap';

const defaultCoordinates = { lat: -1.2195470, lng: 36.8862530 };
const Event = ({ event, onRsvp }) =>
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
                    <a onClick = {() => onRsvp(event.id)}>
                    <button type="button" className="btn btn-primary" style={{ float: 'right' }}>RSVP</button>
                </a>
                </h5>

            </td>
        </tr>
    </tbody>
</table>

</div>;


export default Event;
