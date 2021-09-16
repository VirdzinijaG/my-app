import React from 'react';
import SmallCow from './SmallCow';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cows: [],
            cowInput: ""
        }
    }

    addCow = (e) => {
        const cow = { color: this.state.cowInput }
        this.setState(state => ({ cow: state.cows.slice().push(cow) }))
    }

    cowInputHandler = (e) => {
        this.setState(state => ({ cowInput: e.target.value }))
    }


    render() {
        return (
            <>
                {this.state.cows.map((b, i) => <SmallCow key={i} color={b}></SmallCow>)}
                <div>
                    <input type="text" value={this.state.bgIn} onChange={this.cowInputHandler} />
                    <button className='input-button' onClick={this.addCow}>Add Cow</button>
                </div>
            </ >
        );
    }
}

export default App;