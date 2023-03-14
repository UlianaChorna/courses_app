import { Link } from "react-router-dom";

const LessonsItem = ({lessons,courseId}) => {
    // const {id, title, status} = props;
        
    return ( 
        <div className="card">
       <div className="card-action">
          <Link to={`/${courseId}/lessons/${lessons.id}`}  className="btn"> {lessons.title}</Link>
        </div> 
        </div> );
}
 
export default LessonsItem;