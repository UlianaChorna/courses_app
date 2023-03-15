
import { useState } from "react";
import {Link } from "react-router-dom";

const CoursesItem = (props) => {
  const [isHover, setIsHover] = useState(false);
    const {id,
      title,
      previewImageLink,
      lessonsCount,
      description,
      rating,
      skills
        
        } = props;
        
    return (
        <div className="card"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
          <div className="card-image">
            <img src={previewImageLink+'/cover.webp'} alt={title} />
          </div>
          {isHover && (
            <>
            
          <div className="card-content">
          <span className="card-title">{title}</span>
          <p className="card-title">Lesson Count:{lessonsCount}</p>
          <p className="card-title">Rating:{rating}</p>
          <p className="card-title">{skills}</p>
            <p className="card-title">{description.slice(0,700)}...</p>
          </div>
          </>
          )}
        <div className="card-action">
          <button className="btn"><Link to={`/${id}`} > Watch category</Link></button>
          
        </div> 
        </div> );
}
 
export default CoursesItem;