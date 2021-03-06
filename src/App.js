import React from 'react';

import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import './App.css';

function App() {
  const videoSource = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  const scrollToBottom = () => {
    const bottomEle = document.getElementById("video-id");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ height: '', }} >
      <BackgroundVideo
        blur={2}
        videoSource={videoSource} >
        <div className='content'>
          <div className='sub-content' >
            <h1>Background Video</h1>
            <p>Learn how to create a background video in React</p>
            <button
              className="btn btn-outline-dark"
              onClick={scrollToBottom}>
              Let's go!
          </button>
            {/* <img
              className="view-image"
              src="https://www.jing.fm/clipimg/detail/139-1394959_panda-cartoon-png-cute-cartoon-panda-bear.png"
              alt="profile" /> */}
          </div>
        </div>
      </BackgroundVideo>

      <div style={{ height: 1500, backgroundColor: '#60255f' }} >
      </div>
    </div>
  );
}

export default App;
