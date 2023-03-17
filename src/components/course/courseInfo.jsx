
import { useState } from "react";
import ButtonDownload from "../buttonDownload/buttonDownload";
import "./course.css"
 import Player from '../video/VideoPlayer'

const CourseInfo = ({course}) => {
  const [currentLessons, setCurrentLessons] = useState(course.lessons[0]);

    return (  <div className="card">
      <div className="card-title">{course.title}</div>
      <div className="card-desc">{course.description}</div>
    <div className="card-video">
      {currentLessons.status !== 'locked' ? (
        <Player videoUri={currentLessons.link} lessonId ={currentLessons.id} muted={false}/>
      ) : (
        <div className="lesson-locked"> Lessons is locked</div>
      )}
    
       <div className="card-desc">You watch: <span className="card-name">{currentLessons.title}</span></div>
     </div>
     <div className="speed">If you want, you can change the speed in the video, if you want to decrease press "y", increase - "n" </div>
     <ButtonDownload/>
    <div className="card-content"> 
    <div className="list-course">Watch next lesson:
        {course.lessons.map(el =>
         <button className="list-lesson" onClick={e => setCurrentLessons(el)} > <ul><li>{el.title}</li></ul></button>
            )}      
    </div>
    </div>
    </div> );
}
 
export default CourseInfo;