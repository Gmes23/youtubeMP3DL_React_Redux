import React, { Component } from 'react';
import '../../public/style/header_navbar.css';

class HeaderNavbar extends Component {
  render() {
    return (
      <div className="header_navbar">
        <div className="search-bar">
           <div className="search-icon">
           <input className="search-bar-input" />
           </div>
           
        </div>
      </div>
    );
  }
}

export default HeaderNavbar;