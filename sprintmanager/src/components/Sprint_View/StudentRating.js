import React from "react";

class StudentRating extends React.Component {
    state = {
        frownFlag: true,
        mehFlag: true,
        smileFlag: true,
    };

    setRating = rating => {
        if (rating === 1 && this.state.smileFlag !== false && this.state.mehFlag !== false) {
            this.setState({ frownFlag: !this.state.frownFlag });
        } else if (rating === 2 && this.state.frownFlag !== false && this.state.smileFlag !== false) {
            this.setState({ mehFlag: !this.state.mehFlag });
        } else if (rating === 3 && this.state.frownFlag !== false && this.state.mehFlag !== false) {
            this.setState({ smileFlag: !this.state.smileFlag });
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.state.frownFlag ? (
                    <i className="far fa-frown fa-2x" onClick={() => this.setRating(1)} />
                ) : (
                    <i className="fas fa-frown fa-2x" onClick={() => this.setRating(1)} />
                )}
                {this.state.mehFlag ? (
                    <i className="far fa-meh fa-2x" onClick={() => this.setRating(2)} />
                ) : (
                    <i className="fas fa-meh fa-2x" onClick={() => this.setRating(2)} />
                )}
                {this.state.smileFlag ? (
                    <i className="far fa-smile fa-2x" onClick={() => this.setRating(3)} />
                ) : (
                    <i className="fas fa-smile fa-2x" onClick={() => this.setRating(3)} />
                )}
            </React.Fragment>
        );
    }
}

export default StudentRating;
