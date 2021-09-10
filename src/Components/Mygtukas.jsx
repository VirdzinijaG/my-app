import React from 'react';

class Mygtukas extends React.Component {
    constructor() {
        super();
        // this.state = { date: new Date() }
    }

    activateLasers = (e) => {
        // console.log(e);
        e.stopPropagation(); // nebespausdina valio
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
                <div className="container" onClick={(e) => this.activateLasers(e)}>
                    <div className="submit-feedback">{this.props.tekstas}</div>
                </div>
            </div>
        )
    }

}

export default Mygtukas;