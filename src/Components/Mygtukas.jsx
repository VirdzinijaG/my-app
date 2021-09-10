import React from 'react';
import CountDisplay from './CountDisplay';

class Mygtukas extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 }
    }

    activateLasers = (e) => {
        // console.log(e);
        e.preventDefault(); // nebeperkarauna puslapio naudojant a
        e.stopPropagation(); // nebespausdina valio

        // Wrong
        // this.setState({
        //     counter: this.state.counter + 1,
        // });

        // Correct
        this.setState((state, props) => ({
            counter: state.counter + props.amount
        }))

        // console.log('Lazeriai aktyvuoti');
        // console.log(this);
        console.log(`Lazeriai ${this.props.tekstas} aktyvuoti`);

    }

    valio = (e) => {
        console.log('Valio', this.props.tekstas);

    }


    componentDidMount() {

        // document.querySelector('#root').
        //     addEventListener('click', e => {
        //         console.log('Valio');
        //     })

    }
    componentWillUnmount() {
    }
    render() {
        return (
            // <div className="container" onClick={this.activateLasers}>
            <div onClick={(e) => this.valio(e)}>
                {/* <div className="container" onClick={(e) => this.activateLasers(e)}>
                    <div className="submit-feedback">{this.props.tekstas}</div>
                </div> */}
                <a href="" className="container" onClick={(e) => this.activateLasers(e)}>
                    <div className="submit-feedback">{this.props.tekstas} {this.state.counter}</div>
                </a>
                <CountDisplay digit={this.state.counter}></CountDisplay>
            </div>
        )
    }

}

export default Mygtukas;