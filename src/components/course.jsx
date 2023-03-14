import { useParams,useHistory } from "react-router-dom";
import { getCourseById,getToken } from "../api";
import { useEffect,useState } from "react";
import Preloader from "./preloader";
import CourseInfo from "./courseInfo";



const Course = () => {
    const {courseId} = useParams();
  
    const[course,setCourse]  = useState();
    const {goBack} = useHistory()

    useEffect(() => {
        getToken().then(data =>{
        getCourseById(courseId, data.token).then(data =>{
            console.log(data);
            setCourse(data)})
            
        })
           
    },[courseId])

    return ( <>
       <button className="btn" onClick={goBack}>Go Back </button>
     {!course ? <Preloader/> : <CourseInfo course={course} /> }
    
    </> );
}
 
export default Course;