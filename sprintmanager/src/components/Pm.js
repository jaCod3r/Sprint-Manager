
import React from "react";
import { Button, ListGroup, Row, Col, Container } from "reactstrap";

import NavBar from "./NavBar";
import StudentListModal from './StudentListModal';
import StudentLink from './StudentLink';
import "../css/Pm.css";
import { StudentsContext } from "../contexts/StudentsContext";

class ProgramManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            Students: [
                { student: "John Wallace", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Casey Roberts", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "John Doe", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Jane Doe", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "John Huggett", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Casey Smith", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "John Smith", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Jane Smith", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Daniel Jones", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Mark Anthony", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Joe Mul", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Jean Grant", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Owen Marcus", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Lewis Jones", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Casey Robertson", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "John Don", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Jane Doe", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "John Paul", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Casey Jones", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "John William", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Jane William", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Dan Jones", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Mark Anthony", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Joe Mul", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Jean Grant", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Owen Marcus", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
                { student: "Lewis Jones", cohort: "CS8", sc_reviews: [], sc_ratings: [] },
            ],
            searchQuery: "",
            NameList: [],
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    // handleSearch = event => {
    //     this.setState({
    //         searchQuery: event.target.value,
    //     });
    // };

    addName = name => {
        let nameList = [...this.state.NameList];

        if (nameList.indexOf(name) === -1) {
            nameList.push(name);
        }

        this.setState({
            NameList: nameList,
        });
    };

    removeName = index => {
        let newNameList = [];
        for (let i = 0; i < this.state.NameList.length; i++) {
            if (i !== index) {
                newNameList.push(this.state.NameList[i]);
            }
        }
        this.setState({
            NameList: newNameList,
        });
    };

    render() {
        const students = this.state.Students.map(studentObj => studentObj.student);
        const nameSearch = students.filter(name => {
            return name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
        });
        return (
            <Container>
                <NavBar />

                <Row className="mb-3">
                    <Col>
                        <h3>
                            <span>Project Manager's Name</span>
                        </h3>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Button className="PM-Add" onClick={this.toggle}>
                            Add student
                        </Button>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h5>Your Students</h5>
                    </Col>
                </Row>

                <Row className="PM-Student-List">
                    <Col>
                        <ListGroup>
                            {this.state.NameList.map((name, index) => {
                                return (
                                    <Row className="PM-Student-List Row" key={index}>
                                        <StudentLink
                                            name={name}
                                            index={index}
                                            removeName={this.removeName}
                                        />
                                    </Row>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                <StudentListModal
                    nameSearch={nameSearch}
                    toggle={this.toggle}
                    addName={this.addName}
                    modal={this.state.modal}
                    searchQuery={this.state.searchQuery}
                />
            </Container>
        );
    }
}

export default ProgramManager;