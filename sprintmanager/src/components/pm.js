import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/Pm.css';

class ProgramManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="projectmanager">Project Manager / Teacher Assistant Name: </div>
        <div className="searchstudent">
          Search for student: <input placeholder="Name" />
        </div>

        <div className="student">Your Students </div>

        <div className="modalbutton">
          <Button color="success" onClick={this.toggle}>
            Add student
          </Button>
        </div>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <li> Student 1 </li>
            <li> Student 1</li>
            <li> Student 1</li>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Add Student
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <div> </div>
      </div>
    );
  }
}

export default ProgramManager;
