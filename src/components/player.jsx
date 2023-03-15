import React, { useRef } from "react";


import useVideoPlayer from "../usePlayer";

const Player = ({videoUri}) => {
  const videoElement = useRef(null);
  const {
    playing,
    progress,
    muted,
    speed,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
        //   src={videoUri}
        //   type="m3u8"
          ref={videoElement}
        
          onTimeUpdate={handleOnTimeUpdate}
        
          >
            <source
              src={videoUri}
              type="application/x-mpegURL"
            />
          </video>
        
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playing ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!muted ? (
              <i className="bx bxs-volume-full"></i>
            ) : (
              <i className="bx bxs-volume-mute"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;