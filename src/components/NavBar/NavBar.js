import "./NavBar.css";
import { scrollToElement } from "../../Helper";
import logo from "../../imgs/logo-3.png";
// make navbar disappear when mouse stops moving

export default function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo"/>
      <div className="navButtons">
        <button onClick={() => scrollToElement("#home")}>Home</button>
        <button onClick={() => scrollToElement("#about")}>About</button>
        <button onClick={() => scrollToElement("#portfolio")}>Portfolio</button>
        <button onClick={() => scrollToElement("#contact")}>Contact</button>
        <a
          href="https://www.linkedin.com/in/juan-a-sanchez/"
          target="_blank"
          rel="noreferrer">
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}
