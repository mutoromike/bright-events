import React, {Component} from 'react';

class Events extends Component {

  render() {
    return (
        <div className="container page-content">
        <br />
        <br />
        <br />
        <br />
            <div className="row container"> 
            </div>
            <div className="row container">
                <div className="col-md-10">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">Available Events</h3>
                        </div>
                        {/* panel-heading */}
                        <table className="table table-hover" id="activity-table">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Category</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* for item in Events  */}
                                <tr>
                                        <td>
                                            <div className="form-group">
                                                <input type="text" value="Game" className="form-control" disabled />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <input type="text" value="" className="form-control" disabled />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <input type="text" value="" className="form-control" disabled />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <input type="text" value="" className="form-control" disabled />
                                            </div>
                                        </td>
                                        <td>
                                            <a href="/api/v1/{{ item['name'] }}/rsvp" className="btn btn-primary">RSVP</a>
                                        </td>
                                </tr>
                                {/* endfor */}
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

export default Events;