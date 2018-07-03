import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import '../css/Pm.css';
import NavBar from '../components/NavBar';

class ProgramManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Names: ['John Hugget', 'Casey Smith', 'John Smith', 'Jane Smith'],
      searchQuery: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSearch = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  render() {
    const nameSearch = this.state.Names.filter(name => {
      return name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) === -1;
    });
    return (
      <div>
        <NavBar />
        <div className="projectmanager">Project Manager / Teacher Assistant Name: </div>

        <div className="student">Your Students </div>

        <div className="modalbutton">
          <Button color="success" onClick={this.toggle}>
            Add student
          </Button>
        </div>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Search Student</ModalHeader>
          <ModalBody>
            <div className="searchstudent">
              <Input type="text" placeholder="Search" value={this.state.searchQuery} onChange={this.handleSearch} />
            </div>
            <div>
              {this.state.Names.map(name => {
                <li>{name}</li>
              })}
            </div>
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
