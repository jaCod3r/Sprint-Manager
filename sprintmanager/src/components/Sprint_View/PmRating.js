import React from "react";

class PmRating extends React.Component {
    state = {
        frownFlag: true,
        mehFlag: true,
        smileFlag: true,
    };

    setRating = rating => {
        if (rating === 1) {
            this.setState({ frownFlag: !this.state.frownFlag, mehFlag: true, smileFlag: true });
        } else if (rating === 2) {
            this.setState({ frownFlag: true, mehFlag: !this.state.mehFlag, smileFlag: true });
        } else {
            this.setState({ frownFlag: true, mehFlag: true, smileFlag: !this.state.smileFlag });
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

export default PmRating;
