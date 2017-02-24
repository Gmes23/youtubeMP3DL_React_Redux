import React, { Component } from 'react';
import '../../public/style/header_navbar.css';
import SearchBarInput from './search_bar_input';


class HeaderNavbar extends Component {
  render() {
    return (
      <div className="header_navbar">
        <div className="search-bar-container">
           <div className="search-icon">
           <SearchBarInput onSearchTermChange={term => this.videoSearch(term)} />
           {/*<input className="search-bar-input" />*/}
           </div>
        </div>
      </div>
    );
  }
}

export default HeaderNavbar;