// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
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