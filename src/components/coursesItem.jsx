
import {Link } from "react-router-dom";

const CoursesItem = (props) => {
    const {id,
      title,
      previewImageLink,
      lessonsCount,
      description,
      rating,
      skills
        
        } = props;
        
    return (
        <div className="card">
        <div className="card-image">
          <img src={previewImageLink+'/cover.webp'} alt={title} />
        </div>
        <div className="card-content">
        <span className="card-title">{title}</span>
        <span className="card-lessonsCount">{lessonsCount}</span>
        <span className="card-rating">{rating}</span>
        <span className="card-skills">{skills}</span>
          <p>{description.slice(0,60)}...</p>
        </div>
        <div className="card-action">
          <Link to={`/${id}`} className="btn"> Watch category</Link>
        </div> 
        </div> );
}
 
export default CoursesItem;