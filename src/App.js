import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './Screen';
import config from './config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Screen.Header />
        <Screen.Profile />
        <Screen.Gallery />
        <Screen.Place />
        { config.global.comment.enable ? <Screen.Comment /> : '' }
      </div>
    );
  }
}

export default App;
