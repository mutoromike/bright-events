import React from 'react';

const Event = ({ event }) =>
<div className="panel panel-success" id="heading">
<div className="panel-heading">
    <h3 className="panel-title">{event.name}</h3>
</div>
{/* panel-heading */}


<table className="table table-hover" id="activity-table">
    <thead>
        <tr>

            <th>Category</th>
            <th>Location</th>
            <th>Date</th>
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
                <div className="form-group" style={{
 width: 200, border: '1px solid black', height: '200px', columnSpan: '2'
 }}>
                this is going to map for each
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <h5> Share Here
                &nbsp;&nbsp;&nbsp; Facebook &nbsp;&nbsp;&nbsp;Twitter&nbsp;&nbsp;&nbsp; LinkedIn

                </h5>
            </td>
            <td>

                <h5>
                {/* Button trigger modal */}
                    {/* Edit icon */}
                    <i className="glyphicon glyphicon-edit pull-right" data-toggle="modal" data-target="#flipFlap"></i>

                    {/* The modal  */}
                    <div className="modal fade" id="flipFlap" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title" id="modalLabel">Edit Event</h4>
                    </div>
                    <div className="modal-body">

                    {/* panel-heading */}
                    <div style={{ paddingTop: 30 }} className="panel-body">
                    <form id="loginform" onSubmit = { this.loginSubmit } method="post" className="form-horizontal">

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
                                    <input type="submit" className="btn btn-lg" value="Save"/>
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
                <div className="iconSize">
                    <i className="glyphicon glyphicon-trash pull-right"></i>
                    </div>
                </h5>

            </td>
        </tr>
    </tbody>
</table>

</div>;


export default Event;
