import React from "react";

import { ListGroupItem, UncontrolledCollapse } from "reactstrap";

import NavSprint from "./navSprint";
import SprintTab from "./sprintTab";

class SprintView extends React.Component {
    state = {
        Reviews: {
            input: "",
            review: "",
        },
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            Reviews: { [name]: value },
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.Reviews.input) {
            this.setState({ Reviews: { review: this.state.Reviews.input, input: "" } });
        }
    };

    render() {
        return (
            <React.Fragment key={`#${this.props.index + 1}`}>
                <ListGroupItem id={`toggler${this.props.index + 1}`}>{this.props.sprint}</ListGroupItem>
                <UncontrolledCollapse toggler={`#toggler${this.props.index + 1}`}>
                    <NavSprint activeTab={this.props.activeTab} index={this.props.index} toggle={this.props.toggle} />
                    <SprintTab
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        Reviews={this.state.Reviews}
                        activeTab={this.props.activeTab}
                    />
                </UncontrolledCollapse>
            </React.Fragment>
        );
    }
}

export default SprintView;
