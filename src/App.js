import React, { Component } from 'react';
import LeftSideBar from './components/left_side_bar';
import HeaderNavbar from './components/header_navbar';
import RightContainer from './components/right_container';
import VideoContainer from './components/video_container';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import './App.css';

const API_KEY = 'AIzaSyAEEIfoMI7zfXkA74B15cGyOwve8U1_4vE';

class App extends Component {
      constructor(props) {
        super(props);

        this.state = { 
          videos: [],
          selectedVideo: null
         };

         this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
          this.setState({
             videos: videos,
             selectedVideo: videos[0]
             });
        });
    }

  render() {
    return (
      <div className="App">
        <LeftSideBar />
        <HeaderNavbar />
        <RightContainer />
        <VideoContainer />
     </div>
    );
  }
}

export default App;
