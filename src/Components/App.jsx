import React from 'react';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: 'green',
            bgIn: '',
            size: 500,
            sizeIn: '',
            shapeSquare: false
        }
    }

    inChangeColor = (e) => {
        this.setState({
            bgIn: e.target.value,
        })
    }

    doColor = () => {
        this.setState(state => ({ bg: state.bgIn }))
    }

    inChangeSize = (e) => {
        this.setState({
            sizeIn: e.target.value,
        });
    }
    doSize = () => {
        this.setState(state => ({ size: state.sizeIn }));
    }
    inChangeShape = () => {
        // console.log('jop');

        //good
        this.setState(state => ({ shapeSquare: (!state.shapeSquare) }))

        // wrong
        // this.setState({
        //     shapeSquare: (!this.state.shapeSquare)
        // })
    }

    render() {
        return (
            <div className='circle' style={{
                backgroundColor: this.state.bg,
                width: this.state.size + 'px',
                height: this.state.size + 'px',
                borderRadius: this.state.shapeSquare ? '0' : '50%'
            }}>
                <div>
                    <input type="text" value={this.state.bgIn} onChange={this.inChangeColor} />
                    <button className='input-button' onClick={this.doColor}>Change color</button>
                </div>
                <div>
                    <input type="text" value={this.state.sizeIn} onChange={this.inChangeSize} />
                    <button className="input-button" onClick={this.doSize}>Change Size</button>
                </div >
                <div>
                    <input className="check" type="checkbox" onChange={this.inChangeShape} checked={this.state.shapeSquare} />
                    <label>Change shape</label>
                </div >
            </div >
        );
    }
}
export default App;