import { useState, useEffect } from "react";

export const useVideoPlayer = (videoElement) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? videoElement.current.play() : videoElement.current.pause();
  }, [playing, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress = 
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(progress);
    setCurrentTime(videoElement.current.currentTime);
  };

  const handleLastVideoProgress = (lessonId) => {
    if (lessonId) {
    const playingHistory = JSON.parse(localStorage.getItem("playingHistory") || "[]");
    const lastLessonProgress = playingHistory.find(history => history.lessonId === lessonId)
    if (lastLessonProgress) {
      const currentTime = Number(lastLessonProgress.progress)
      videoElement.current.currentTime = currentTime;
      setCurrentTime(currentTime);
      const progress = (currentTime / videoElement.current.duration) * 100;
      setProgress(progress);
    } 
  }
  };

  const saveVideoProgress = (lessonId) => {
    if (lessonId) {
    const playingHistory = JSON.parse(localStorage.getItem("playingHistory") || "[]");
    const lastLessonProgress = playingHistory.find(history => history.lessonId === lessonId)
    const videoProgress = Math.round(videoElement.current.currentTime).toFixed(2)
    if (lastLessonProgress) {
        lastLessonProgress.progress = videoProgress
    } else {
      playingHistory.push({
        lessonId : lessonId,
        progress : videoProgress
      })
    }
    localStorage.setItem('playingHistory', JSON.stringify(playingHistory));
  }
  }

  const handleVideoSpeed = (event) => {
    let newSpeed = speed
    if (event.key === 'y') {
			newSpeed = newSpeed + 0.5;
	 }
		else if (event.key === 'n') {
      newSpeed = newSpeed - 0.5;
	 }
   if (newSpeed  <=  0) {
     videoElement.current.pause();
   } else {
      videoElement.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
   }
  };

  const toggleMute = (muted) => {
    setMuted(muted);
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
    togglePlay,
    handleOnTimeUpdate,
    handleLastVideoProgress,
    handleVideoSpeed,
    toggleMute,
    saveVideoProgress,
  };
};
