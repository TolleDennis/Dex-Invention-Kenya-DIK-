
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello, Dex Invention Kenya!', // Updated message
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Dex Invention Kenya</h1>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}

export default App;