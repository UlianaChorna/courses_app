
import CoursesItem from "./coursesItem";



const CoursesList  = ({catalog}) => {



    return ( 
        <>
     
    <div className="list">
        {catalog.map(el => 
            <CoursesItem key={el.id} {...el}  />)}
        
    </div>
    </>
     );
}
 
export default CoursesList;