import React from 'react';

class M3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 3 };
    }

    // hooks
    // const [count, setCount] = useState(0);
    // this.state = { x: 3 };
    //  const [x, setCount] = useState(3)
    // setCount - sugalvota funkcija, kuri keicia state
    // const [x, set3X] = useState(3)
    // setState == set3X

    // set3X = () => {
    //     return x + 3;
    // }


    do3 = () => {
        localStorage.setItem('xxx', this.state.x + 3);
        this.setState((state) => ({ x: state.x += 3 }));
    }

    componentDidMount() {
        const x = localStorage.getItem('xxx');
        if (null === x) {
            return;
        }
        this.setState({
            x: parseInt(x)
        })
    }


    render() {
        return (
            <button onClick={this.do3}>{this.state.x}X</button>
        );
    }
}

export default M3;