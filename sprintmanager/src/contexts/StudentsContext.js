import React from 'react';

export const StudentsContext = React.createContext({});

class StudentsProvider extends React.Component {
    constructor() {
        super();
        this.state = {
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
        };
    }

    render() {
        return <StudentsContext.Provider value={this.state}>{this.props.children}</StudentsContext.Provider>
    }
}

export default StudentsProvider;