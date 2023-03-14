import { useState, useEffect } from "react";
import { getAllCourses, getToken } from "../api";
import CoursesList from "../components/coursesList";
import Pagination from "../components/pagination";

import Preloader from "../components/preloader";


const Home = () => {
    const [catalog,setCatalog] = useState([]);
    const [token,setToken] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(10)


    useEffect(() => {
        
        getToken().then(data =>{
            setToken(data.token);
            getAllCourses(data.token).then(data =>
                setCatalog(data.courses) )
                
        });
    },[]);

    const lastCoursesIndex = (currentPage * coursesPerPage)
    const firstCoursesIndex= lastCoursesIndex - coursesPerPage;
    const currentCourses = catalog.slice(firstCoursesIndex,lastCoursesIndex)

    // useEffect(() => {
    //     console.log(currentCourses, lastCoursesIndex, firstCoursesIndex)
    //    },[])
   
   

   
    return ( 
      
        <>
        
        {!catalog.length ? 
        (<Preloader/>) :
        ( <CoursesList catalog={currentCourses} />)}
        <Pagination 
        coursesPerPage={coursesPerPage}
        totalCourses={catalog.length}
       setCurrentPage={setCurrentPage}
       currentPage={currentPage} />
       
        </>
     );
}
 
export default Home;