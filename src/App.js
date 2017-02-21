import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Seewrap-header">
          <div className="Logo-container">
            <h1> SEE
              <br />
                WRAP
             </h1>
          </div>
         <div className="Seewrap-navbar">
            <ul>
              <li> ContactUs</li>
              <li> Vehicle Wraps </li>
              <li> Gallery </li>
              <li> Home </li>            
            </ul>
        </div>
        <p className="App-intro">
        </p>
       </div>
    </div>
    );
  }
}

export default App;
