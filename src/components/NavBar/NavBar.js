import "./NavBar.css";
import { scrollToElement } from "../../Helper";
import logo from "../../imgs/OfficialLogo.png";
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
        <button >
          <a
          className="resume"
          href="https://1drv.ms/w/s!AnDKJx_QNRG04hLlg3Ep2WCJXHvg?e=l6CgM1"
          target="_blank"
          rel="noreferrer">
          Resume
        </a>
        </button>
      </div>
    </div>
  );
}
