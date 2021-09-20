import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = { sk: '3X' }
    }
    changeNumber = () => {
        this.setState(state => {
            let number;
            if (state.sk === '3X') {
                number = '6X'
            }
            else if (state.sk === '6X') {
                number = '9X'
            }
            else if (state.sk === '9X') {
                number = '12X'
            }
            return (
                { sk: number }
            )
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.changeNumber}>{this.state.sk}</button>
            </div >
        );
    }
}

export default App;