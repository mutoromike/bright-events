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
        <tr>

            <th>Category</th>
            <th>Venue</th>
            <th>Happening on</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td>
                    <div className="form-group">
                        {event.category}
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        {event.location}
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        {event.date}
                    </div>
                </td>
            </tr>


    </tbody>
</table>
<table className="table table-hover" id="activity-table">
    <tbody>
    <tr>
        <td>
            <div className="form-group" style={{ width: 200 }}>
            <h5>
                More Details
            </h5>
                {event.description}
            </div>
            </td>
            <td>
                <div style={{ width: 400, height: 250, paddingRight: 0, float: 'right' }}>
                <EventMap coordinates = {defaultCoordinates} />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                 Share
                &nbsp;&nbsp;&nbsp; <img style={{ height: 50, width: 75 }} alt="facebook" src={facebook}/>
                <img style={{ height: 28, width: 28 }} alt="linkedIn" src={linkedIn}/>
            </td>
            <td>
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
