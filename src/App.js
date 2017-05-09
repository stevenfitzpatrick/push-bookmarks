import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Steven Fitzpatrick.io</h3>
          <h2>Welcome to React2</h2>
        </div>

        <Form />

      </div>
    );
  }
}

export default App;
