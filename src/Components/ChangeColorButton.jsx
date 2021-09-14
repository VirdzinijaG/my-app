import React from 'react';
import Reg from './Reg';

class ChangeColorButton extends React.Component {

    render() {
        return (
            // <button className="container" onClick={this.props.clickToChangeColor}>Jaaa!</button>
            // <button className="container" onClick={this.props.clickToChangeColor}>{this.props.color}</button>
            <button className="container" onClick={() => this.props.clickToChangeColor(this.props.color)}>{this.props.color}
                <Reg regNumber={this.props.regNumber}></Reg>
            </button>

        );
    }
}

export default ChangeColorButton;


// this.props.clickToChangeColor(this.props.color)
// () => this.props.clickToChangeColor(this.props.color)

// A(argumentas)
// B()(argumentas)

// function A(argumentas) {}

// function B() {
//     return A
// }


