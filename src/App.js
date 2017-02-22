import React, { Component } from 'react';
import LeftSideBar from './components/left_side_bar';
import HeaderNavbar from './components/header_navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftSideBar />
        <HeaderNavbar />
     </div>
    );
  }
}

export default App;
