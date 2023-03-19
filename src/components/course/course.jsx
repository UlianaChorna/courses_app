import { useParams, useHistory } from "react-router-dom";
import { getCourseById, auth } from "../../api";
import { useEffect, useState } from "react";
import Preloader from "../preloder/preloader";
import CourseInfo from "./courseInfo";
import "./course.css"


const Course = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState();
    const { goBack } = useHistory()

    useEffect(() => {
        auth().then(data => {
            getCourseById(courseId, data.token).then(data => {
                setCourse(data)
            })
        })
        
    }, [courseId])

    return (<>
        <button className="btn" onClick={goBack}>Go Back </button>
        {!course ? <Preloader /> : <CourseInfo course={course} />}
    </>);
}

export default Course;