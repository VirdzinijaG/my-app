import React from 'react';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: 'green',
            bgIn: ''
        }
    }

    changeColor = (color) => {
        console.log(color);
        this.setState({
            bg: color,
            // in: color
        });
    }

    inChangeColor = (e) => {
        // console.log("rasau");
        console.log(e.target.value);
        this.setState({
            //    in: 'c'
            bgIn: e.target.value,
            // bg: e.target.value // ivedus spalva i input toks apskritimas pasiadro
        })
    }

    doColor = () => {
        this.setState(state => ({ bg: state.bgIn }))
    }


    render() {
        return (
            <div className='circle' style={{ backgroundColor: this.state.bg }}>
                <input type="text" value={this.state.bgIn} onChange={this.inChangeColor} />
                <button className='input-button' onClick={this.doColor}>Change color</button>
                <div>
                </div >
            </div >
        );
    }
}
export default App;