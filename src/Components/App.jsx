import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = { bg: 'green' }
    }



    render() {
        return (
            <div>
                <button>3X</button>
            </div>
        );
    }
}

export default App;