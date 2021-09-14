import React from 'react';

class ChangeColorButton extends React.Component {

    render() {
        return (
            // <button className="container" onClick={this.props.clickToChangeColor}>Jaaa!</button>
            <button className="container" onClick={this.props.clickToChangeColor}>{this.props.color}</button>

        );
    }
}

export default ChangeColorButton;
