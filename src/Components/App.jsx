import React from 'react';

import ChangeColorButton from './ChangeColorButton';

class App extends React.Component {

    constructor() {
        super();
        this.state = { bg: 'green' }
    }

    changeColorP = () => {
        this.setState({
            bg: 'palegreen',
        });
    }
    changeColorO = () => {
        this.setState({
            bg: 'orangered',
        });
    }
    changeColorG = () => {
        this.setState({
            bg: 'greenyellow',
        });
    }

    // viena funkcija su argumentu
    changeColor = (color) => {
        console.log(color);
        this.setState({
            bg: color,
        });
    }




    render() {
        return (
            <div className='circle' style={{
                backgroundColor: this.state.bg
            }}>
                {/* < ChangeColorButton color={'palegreen'} clickToChangeColor={this.changeColorP} ></ChangeColorButton >
                < ChangeColorButton color={'orengred'} clickToChangeColor={this.changeColorO} ></ChangeColorButton >
                < ChangeColorButton color={'greenyellow'} clickToChangeColor={this.changeColorG} ></ChangeColorButton > */}
                < ChangeColorButton regNumber={23} color={'palegreen'} clickToChangeColor={this.changeColor} ></ChangeColorButton >
                < ChangeColorButton regNumber={53} color={'orangered'} clickToChangeColor={this.changeColor} ></ChangeColorButton >
                < ChangeColorButton regNumber={77} color={'greenyellow'} clickToChangeColor={this.changeColor} ></ChangeColorButton >
            </div >
        );
    }
}
export default App;