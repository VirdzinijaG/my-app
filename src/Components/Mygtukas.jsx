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
            <button>
                {this.props.text}
            </button>
        )
    }

}

export default Mygtukas;