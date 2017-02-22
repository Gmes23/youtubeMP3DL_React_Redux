import React, { Component } from 'react';
import '../../public/style/left_side_bar.css';

class LeftSideBar extends Component {
  render() {
    return (
      <div className="LeftSideBar">
        <div className="LeftSideBar-Profile">
           <h1 className="NoDecoration Logo"> GMDLISTEN </h1>
        </div>
        <div className="LeftSideBar-LinkContainer">
             <div className="LeftSideBar-FirstContainer">
                <ul className="NoDecoration">
                    <li> Discover </li>
                    <li> Trending </li>
                    <li> Messages </li>
                    <li> PlaceHolder </li>
                </ul>  
             </div> 
            <div className="LeftSideBar-SmallContainer">
                <ul className="NoDecoration">
                    <li className="LeftSideBar-Title"> YOUR MUSIC </li>
                    <li> Artist </li>
                    <li> Video </li>
                    <li> Music </li>
                </ul>  
             </div>    
            <div className="LeftSideBar-SmallContainer">
                <ul className="NoDecoration">
                    <li className="LeftSideBar-Title"> PLAYLIST </li>
                    <li> Hip-Hop </li>
                    <li> Kpop </li>
                    <li> Classical </li>
                </ul>  
             </div>           
        </div>
      </div>
    );
  }
}

export default LeftSideBar;