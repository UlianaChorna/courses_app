import React, { useEffect, useRef, useState } from "react";
import {useVideoPlayer } from "../../hooks/useVideoPlayer";
import videojs from "video.js";
import 'video.js/dist/video-js.css';

 const VideoPlayer = ({videoUri, lessonId, muted}) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  const { speed, handleVideoSpeed } = useVideoPlayer(videoNode);
  const { progress, handleOnTimeUpdate, handleLastVideoProgress, saveVideoProgress, toggleMute } = useVideoPlayer(videoNode);

  useEffect(() => {
    const playerState = {
      fill: true,
      fluid: true,
      autoplay: true,
      controls: true,
      crossOrigin: true,
      className:"video",
      preload: "metadata",
      playbackRates: [0, 0.5, 1, 1.5, 2],
      sources: [
        {
          src: videoUri,
          type: "application/x-mpegURL",
        },
      ],
    }
    
    if (videoNode.current) {
    handleLastVideoProgress(lessonId);
    toggleMute(muted);
    const _player = videojs(videoNode.current, playerState);
    setPlayer(_player);
    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
   }
    
  }, []);

  return (
    <>
     
      <div data-vjs-player  className="video">
        <video
          ref={videoNode}
          onKeyPress={handleVideoSpeed}
          onTimeUpdate={handleOnTimeUpdate}
          onPause={ e => saveVideoProgress(lessonId)}
          className="video-js"
          value={speed}
        > 
        </video>
      </div>
      <div className="video-progress">
        <span>Progress:</span>
        <span>{progress.toFixed(1)}</span>
      </div>
    </>
  );
};

export default VideoPlayer;