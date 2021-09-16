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
        const cows = this.state.cows.slice();
        cows.push(cow);
        this.setState({ cows: cows })
        console.log(cows);
        // this.setState(state => ({ cows: state.cows.slice().push(cow) }))
    }

    cowInputHandler = (e) => {
        this.setState(state => ({ cowInput: e.target.value }))
    }


    render() {
        return (
            <>
                {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color}></SmallCow>)}
                <div>
                    <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler} />
                    <button className='input-button' onClick={this.addCow}>Add Cow</button>
                </div>
            </ >
        );
    }
}

export default App;