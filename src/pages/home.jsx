import { useState, useEffect } from "react";
import { getAllCourses } from "../api";
import CoursesList from "../components/coursesList/coursesList";
import Pagination from "../components/pagination/pagination";
import Footer from '../components/footer/footer'
import Preloader from "../components/preloder/preloader";
import Header from "../components/header/header";

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(10)

    useEffect(() => {
        getAllCourses().then(data =>
            setCatalog(data.courses))
    }, []);

    const lastCoursesIndex = (currentPage * coursesPerPage)
    const firstCoursesIndex = lastCoursesIndex - coursesPerPage;
    const currentCourses = catalog.slice(firstCoursesIndex, lastCoursesIndex)

    return (

        <>
            <Header />
            {!catalog.length ?
                (<Preloader />) :
                (<CoursesList catalog={currentCourses} />)}
            <Pagination
                coursesPerPage={coursesPerPage}
                totalCourses={catalog.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
            <Footer />
        </>

    );
}

export default Home;