// function Bebras(props) {
//     return (
//             <span>{props.bebras}</span>
//     );
// }

import React from 'react';

class Bebras extends React.Component {
    constructor() {
        super();
        this.state = { date: new Date() }
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        console.log("Jau", this.props.bebras);

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <span>{this.props.bebras}
                <hr />
                {this.state.date.toLocaleTimeString()}
            </span>
        )
    }

}

export default Bebras;