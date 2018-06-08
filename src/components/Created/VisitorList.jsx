import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class VisitorList extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.state = {
      open: true,
      form: {
        name: props.event.name
      }
    };
  }

  onClose() {
    this.setState({ open: false });
    this.props.onClose();
  }
  render() {
    const { open, form } = this.state;
    return (
        <div>
            <Modal show={open} onHide={() => console.log('the modal is awesome')}>
            <Modal.Header onClick={this.onClose}closeButton>
              <Modal.Title>Visitor list for event: {form.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>


        <table class="table table-hover">
        <tr>
            <th>
                UserName
            </th>
            <th>
                Email
            </th>
        </tr>
        {this.props.users.map(user =>
        <tr>
            <td>
                 {user.username}
            </td>
            <td>
                {user.email}
            </td>

        </tr>)}
      </table>


<div className="form-group">
    <div className="row">
    </div>
</div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.onClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>

    );
  }
}

export default VisitorList;
