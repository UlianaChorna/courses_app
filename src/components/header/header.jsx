import { Link } from "react-router-dom";
import "./header.css"


const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/" className="logo">The best courses
          <div className="wrapper">
            <p>E</p>
            <p>V</p>
            <p>E</p>
            <p>R</p>
          </div> </Link>
      </h1>
      <nav className="nav">
        <ul className="ul-nav">
          <li className="li-nav">
            <Link to="/" data-scrollto="home">Home</Link>
          </li>
          <li className="li-nav">
            <span><Link to="/about" className="link">About</Link></span>
          </li>
          <li className="li-nav">
            <span><Link to="/contact" className="link">Contact</Link></span>
          </li>
        </ul>
        <img src="https://static.vecteezy.com/system/resources/previews/010/869/731/original/online-education-concept-illustration-digital-classroom-online-teaching-metaphors-free-png.png" alt="picture" width="400px" height="200px" className="img-nav" />
      </nav>
    </div>
  );
}

export default Header;