import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const StudentLink = props => {
    return (
        <React.Fragment>
            <ListGroupItem className="PM-Student-List Item">
                <Link className="PM-Student-List--Link" to="/student">
                    {props.name}
                </Link>
            </ListGroupItem>
            <Button className="PM-Student-List--Link PM-Add PM-Delete btn" onClick={() => props.removeName(props.index)}>
                X
        </Button>
        </React.Fragment>
    )
}

export default StudentLink;