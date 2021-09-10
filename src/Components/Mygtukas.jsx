import React from 'react';

class Mygtukas extends React.Component {
    constructor() {
        super();
        // this.state = { date: new Date() }
    }

    activateLasers = () => {
        // console.log('Lazeriai aktyvuoti');
        // console.log(this);
        console.log(`Lazeriai ${this.props.tekstas} aktyvuoti`);
    }

    componentDidMount() {

        document.querySelector('#root').
        addEventListener('click', e => {
            console.log('Valio');
        })

    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="container" onClick={this.activateLasers}>
            {/* <div className="container" onClick={ () => this.activateLasers ()}></div> */}
                <div className="submit-feedback">{this.props.tekstas}</div>
            </div>
        )
    }

}

export default Mygtukas;