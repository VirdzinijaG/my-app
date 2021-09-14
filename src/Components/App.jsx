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




    render() {
        return (
            <div className='circle' style={{
                backgroundColor: this.state.bg
            }}>
                < ChangeColorButton color={'Palegreen'} clickToChangeColor={this.changeColorP} ></ChangeColorButton >
                < ChangeColorButton color={'Orengred'} clickToChangeColor={this.changeColorO} ></ChangeColorButton >
                < ChangeColorButton color={'Greenyellow'} clickToChangeColor={this.changeColorG} ></ChangeColorButton >
            </div >
        );
    }
}
export default App;