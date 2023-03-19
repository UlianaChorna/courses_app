import "./footer.css"
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          <span className="more-info">
            {new Date().getFullYear()}
            <a className="text-footer" href="#!">More Links</a>
          </span>
          <ul className="wrapper-icon">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <BsFacebook />
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <AiOutlineTwitter />
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <BsInstagram />
            </li>
            <li className="icon github">
              <span className="tooltip">Github</span>
              <BsGithub />
            </li>
            <li className="icon youtube">
              <span className="tooltip">Youtube</span>
              <BsYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;