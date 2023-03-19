
import { useState } from "react";
import ButtonDownload from "../buttonDownload/buttonDownload";
import "./course.css"
import Player from '../video/VideoPlayer'

const CourseInfo = ({ course }) => {
  const [currentLesson, setCurrentLesson] = useState(course.lessons[0]);

  return (<div className="card">
    <div className="card-title">{course.title}</div>
    <div className="card-desc">{course.description}</div>
    <div className="card-video">
      {currentLesson.status !== 'locked' ? (
        <Player videoUri={currentLesson.link} lessonId={currentLesson.id} muted={false} />
      ) : (
        <div className="lesson-locked"> Lesson is locked</div>
      )}
      <div className="card-desc"> <span className="card-name">{currentLesson.title}</span></div>
    </div>
    <div className="speed">If you want, you can change the speed in the video, if you want to decrease press "y", increase - "n" </div>
    <ButtonDownload />
    <div className="card-content">
      <div className="list-course">Watch next lesson:
        {course.lessons.map(el =>
          <button className="list-lesson" onClick={e => setCurrentLesson(el)}> <ul><li>{el.title}</li></ul></button>
        )}
      </div>
    </div>
  </div>);
}

export default CourseInfo;