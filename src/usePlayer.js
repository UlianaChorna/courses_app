import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
   
  };

  useEffect(() => {
    playing
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playing, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(progress);
    // setCurrentTime(videoElement.current.currentTime);
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange)
    // setCurrentTime(videoElement.current.currentTime);
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setSpeed(speed);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    muted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [muted, videoElement]);

  return {
    playing,
    progress,
    muted,
    speed,
    currentTime,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;