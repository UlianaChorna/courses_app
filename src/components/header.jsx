import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="navbar"> 
        <nav >
        
          <div className="menu-area">
          <Link to="/" className="link">The best courses ever</Link>
          <ul id="nav-mobile" >
          <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
          </ul>
          </div>
          </nav>
        </div>
      
     );
}
 
export default Header;