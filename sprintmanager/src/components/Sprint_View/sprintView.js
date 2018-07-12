import React from "react";

import { ListGroupItem, Collapse } from "reactstrap";

import NavSprint from "./navSprint";
import SprintTab from "./sprintTab";

class SprintView extends React.Component {
    state = {
        Reviews: {
            input: "",
            review: "",
        },
        activeTab: "1",
        collapse: false,
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

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    toggleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    };

    render() {
        return (
            <React.Fragment key={`#${this.props.index + 1}`}>
                <ListGroupItem onClick={this.toggleCollapse}>{this.props.sprint}</ListGroupItem>
                <Collapse isOpen={this.state.collapse}>
                    <NavSprint activeTab={this.state.activeTab} index={this.props.index} toggle={this.toggle} />
                    <SprintTab
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        Reviews={this.state.Reviews}
                        activeTab={this.state.activeTab}
                    />
                </Collapse>
            </React.Fragment>
        );
    }
}

export default SprintView;
