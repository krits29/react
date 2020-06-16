import React, { Component } from 'react';
import logo from './logo.svg';
import Foods from './containers/Foods'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Foods />
      </div>
    )
  }
}

export default App;
