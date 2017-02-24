import React, { Component } from 'react';
import '../../public/style/video_container.css';
import VideoDetail from './video_detail';

class VideoContainer extends Component {
  render() {
    return (
      <div className="VideoContainer">
            <div className="video_holder">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="video_details">
                <span> Title of Video HERERERWERWERWREWRWERWERWER  </span>
                <span> ARtist name here werwerwerwrrrrrrrrrrrrrrrrrrrr</span>
            </div>
      </div>
    );
  }
}

export default VideoContainer ;