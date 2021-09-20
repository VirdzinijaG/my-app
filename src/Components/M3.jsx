import React from 'react';

class M3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 3 };
    }
    do3 = () => {
        this.setState((state) => ({ x: state.x += 3 }))
    }
    render() {
        return (
            <button onClick={this.do3}>{this.state.x}X</button>
        );
    }
}

export default M3;