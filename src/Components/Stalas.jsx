import Component from './Component';
import React from 'react';

// klasinis komponentas
class Stalas extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = {date: new Date()};
    }
  
    render() {
      return (
        <Component per={this.props.per} name={"Labas "} surname={"Petraiti"} />
      );
    }
  }

  export default Stalas;