
import { useState } from "react";
import { Link } from "react-router-dom";
import "./coursesList.css"

import Player from "../video/VideoPlayer"
const CoursesItem = (props) => {
  const [isHover, setIsHover] = useState(false);
    const { id,
      title,
      previewImageLink,
      lessonsCount,
      description,
      meta,
      rating,
      skills } = props;
        console.log(props)
    return (
        <div className="card"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
      
          <div className="card-image">
            { isHover ? (
              <>
              <Player videoUri={meta.courseVideoPreview.link} muted={true} />
           <div className="card-content">
           <span className="card-title-course">{title}</span>
           <div className="card-course-desc">Lesson Count:{lessonsCount}</div>
           <div className="card-course-desc">Rating:{rating}</div>
           <div className="card-course-desc">{skills}</div>
             <div className="card-course-desc">{description.slice(0,700)}...</div>
           </div>
           </>
            ) : (
             <img src={previewImageLink+'/cover.webp'} alt={title} />
            ) }

            
            
          </div>
          {/* {isHover && (
            <>
             <Player videoUri={meta.courseVideoPreview.link}  />
          <div className="card-content">
          <span className="card-title-course">{title}</span>
          <div className="card-course-desc">Lesson Count:{lessonsCount}</div>
          <div className="card-course-desc">Rating:{rating}</div>
          <div className="card-course-desc">{skills}</div>
            <div className="card-course-desc">{description.slice(0,700)}...</div>
          </div>
          </>
          )} */}
        <div className="card-action">
          <div className="wrap-button" ><Link to={`/${id}`} >
            <div className="button-watch">
 Watch course
</div> </Link></div>
          
        </div> 
        </div> );
}
 
export default CoursesItem;