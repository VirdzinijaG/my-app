import React from 'react';

import ChangeColorButton from './ChangeColorButton';

class App extends React.Component {

    constructor() {
        super();
        this.state = { bg: 'green' }
    }

    changeColor = () => {
        // this.setState ({
        //     bg: 'orangered',
        // }); 
        // pasikeicia viena karta spalva

        // keiciasi kas kart paspaudus
        this.setState(state => {
            let color;
            if (state.bg === 'green') {
                color = 'orangered'
            }
            else if (state.bg === 'orangered') {
                color = 'green'
            }

            return (
                // { bg: state.bg === 'green' ? 'orangered' : 'green' }
                { bg: color }
            )
        })
    }

    render() {
        return (
            <div className='circle' style={{ backgroundColor: this.state.bg }}>
                {/* <button className="container" onClick={this.changeColor}>Jaaa!</button> */}
                <ChangeColorButton clickToChangeColor={this.changeColor}></ChangeColorButton>
            </div>
        );
    }
}
export default App;