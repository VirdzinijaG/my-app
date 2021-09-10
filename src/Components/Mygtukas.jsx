import React from 'react';

class Mygtukas extends React.Component {
    constructor() {
        super();
        // this.state = { date: new Date() }
    }
    componentDidMount() {

    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="container">
            <div className="submit-feedback">{this.props.tekstas}</div>
          </div>
        )
    }

}

export default Mygtukas;