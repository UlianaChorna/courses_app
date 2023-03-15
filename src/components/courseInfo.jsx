import { useState } from "react";

import Player from "./player";

const CourseInfo = ({course}) => {
  const [currentLessons, setCurrentLessons] = useState(course.lessons[0]);


console.log(course.lessons[0].link)
    return (  <div className="card">
    <div className="card-image">
       <Player videoUri={'http://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8'}/>
 
{/*      
    <video
      id="video"
      className="video-js"
      controls
      preload="auto"
      width="640"
      height="264"
      data-setup="{}"
      crossOrigin="true"
    >
      <source
        src="http://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-1/AppleHLS1/lesson-1.m3u8"
        type="application/x-mpegURL"
      />
    </video> */}

    </div>
    <div className="card-content">
    <span className="card-title">{course.title}</span>
    <p className="card-title">{course.description}</p>
    <p className="card-title">You watch:{currentLessons.title}</p>
    <p className="card-title">order:{course.order}</p>
    <div className="list">
        {course.lessons.map(el =>
        <button  className="btn" onClick={() => setCurrentLessons(el)} >{el.title}</button>
            )}
        
    </div>

    </div>
    {/* <div className="card-action">
      <Link to={`/meal/${idMeal}`} className="btn"> Watch recipe</Link>
    </div>  */}
    </div> );
}
 
export default CourseInfo;