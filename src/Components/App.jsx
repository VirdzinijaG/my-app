import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = { bg: 'green'}
    }

    changeColor = () => {
        // this.setState ({
        //     bg: 'orangered',
        // }); 
        // pasikeicia viena karta spalva

        // keiciasi kas kart paspaudus
        this.setState(state => ({bg: state.bg === 'green' ? 'orangered': 'green'}))
    }

    render() {
        return (
            <div className='circle' style={{ backgroundColor: this.state.bg }}>
                <button className="container" onClick={this.changeColor}>Jaaa!</button>
            </div>
        );
    }
}
export default App;