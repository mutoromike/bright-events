import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class EditEventModal extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.state = {
      open: true,
      form: {
        id: props.event.id,
        name: props.event.name,
        category: props.event.category,
        location: props.event.location,
        date: props.event.date,
        description: props.event.description
      },
    };
  }
  // Method used to update the state of the form when editing
  updateEvent(event) {
    const { form } = this.state;
    form.name = event.name;
    form.category = event.category;
    form.location = event.location;
    form.date = event.date;
    form.description = event.description;
    this.setState(form);
  }
  onClose() {
    this.setState({ open: false });
    this.props.onClose();
  }
  // Method to check if an event field is being edited
  inputChanged(e) {
    const { value, name } = e.target;
    this.setState({ form: Object.assign({}, this.state.form, { [name]: value }) });
  }
  render() {
    const { open, form } = this.state;
    const { onEdit } = this.props;
    return (
        <div>
            <Modal show={open} onHide={() => console.log('the modal is awesome')}>
            <Modal.Header onClick={this.onClose}closeButton>
              <Modal.Title>Edit Event: {form.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form id="loginform" method="put" className="form-horizontal">

<div style={{ marginBottom: 25 }} className="input-group ">
    <span className="input-group-addon">
    </span>
    <input type="text" name='name' className="form-control" value={form.name}
    onChange = {this.inputChanged} placeholder="Event Name" required />
</div>

<div style={{ marginBottom: 25 }} className="input-group ">
    <span className="input-group-addon">
    </span>
    <input type="text" name='category' className="form-control" value={this.state.form.category}
    onChange = {this.inputChanged} placeholder="Category" required />
</div>

<div style={{ marginBottom: 25 }} className="input-group ">
    <span className="input-group-addon">
    </span>
    <input type="text" name='location' className="form-control" value={this.state.form.location}
    onChange = {this.inputChanged} placeholder="Location" required />
</div>

<div style={{ marginBottom: 25 }} className="input-group">
    <span className="input-group-addon">
    </span>
    <input type="date" name='date' className="form-control" value={this.state.form.date}
    onChange = {this.inputChanged} placeholder="Date" required />
</div>

<div style={{ marginBottom: 25 }} className="input-group ">
    <div className="input-group-addon">
    </div>
    <textarea type="text" name='description' className="form-control"
    onChange = {this.inputChanged} placeholder="Description" required >
    {this.state.form.description}
    </textarea>
</div>


<div className="form-group">
    <div className="row">
        <div className="col-sm-8 col-sm-offset-4">
            <a onClick = {e => onEdit(e, form)}>
            <input type="submit" className="btn btn-success" value="Save"/>
            </a>
        </div>
    </div>
</div>
</form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.onClose}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>

    );
  }
}

export default EditEventModal;
