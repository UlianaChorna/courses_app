import { useEffect,useState } from "react";
import LessonsItem from "./lessonsItem";


const CourseInfo = ({course}) => {
  const [currentLessons, setCurrentLessons] = useState(course.lessons[0]);


console.log(course.lessons[0].link)
    return (  <div className="card">
    <div className="card-image">
      
 
     
    <video 
    type="m3u8"
          controls 
          autoPlay
          src={{uri:currentLessons.link, type:"m3u8"}} />
       
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