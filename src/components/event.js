import React ,{ Component } from 'react';

const divStyle = {
    display: 'block',
    margin: '0px 0px 30px 30px'
}

class Event extends Component {
    render() {
        return (
            <div className="container page-content">
            <br />
        <br />
        <br />
        <br />
            <div className="row container">
                {/* response */}
                {/* error */}
                <div>
        
                    <form id="add-list-form" method="post" action="/api/v1/events" style={ divStyle }>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" name="event-name" id="event-name" placeholder="Event Name" value="" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="category" id="category" placeholder="Category" value="" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="location" id="location" placeholder="Location" value="" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <input type="date" name="date" id="date" placeholder="dd/mm/yyyy" value="" className="form-control" required />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="submit" method="post" name="list-submit" id="list-submit" className=" btn btn-primary" value="Add Event" />
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* form */}
                </div>
            </div>
            <div className="row container">
                <div className="col-md-10">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">My Events</h3>
                        </div>
                        {/* panel-heading */}
                        <table className="table table-hover" id="activity-table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Save Edit</th>
                                    <th>Delete Event</th>
                                    <th>View Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <form id="list-name-form"> */}
                                        <td>
                                            <div className="form-group">
                                                <input type="text" value="" className="form-control" name="event_name" />
                                                <input type="hidden" value="" className="form-control" name="new_name" />
                                            </div>
                                        </td>
                                        <td> <button type="submit" className="btn btn-info btn-sm" form="list-name-form">
                                    <span className="glyphicon glyphicon-saved" aria-hidden="true"></span>Save</button>
                                        </td>
                                        <td> <button type="submit" className="btn btn-info btn-sm" form="list-name-form">
                                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>   </button>
                                        </td>
                                        <td>
                                            <a href="/api/v1/eventdetails/{{ item['name'] }}" className="btn btn-primary">Details</a>
                                        </td>
                                    {/* </form> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* panel panel-success */}
                </div>
                {/* col-md-8 */}
            </div>
        </div>
        );
    }
}
export default Event;
