import "./Portfolio.css";
import CalcImage from "../../imgs/Calc-project.png";
import PacMimage from "../../imgs/pacman.png";

export default function NavBar() {
  return (
    <div className="page" id="portfolio">
      <h1 className="Port">Portfolio</h1>
      {/* make links open in a new page */}
      <div className="links">
        <a
          className="calc"
          href="https://john-sanchez-ii.github.io/Calculator-II/"
        >
          <img src={CalcImage} height="250" width="200" />
        </a>
        <a
          className="pacman"
          href="https://john-sanchez-ii.github.io/Game-Project/"
        >
          <img src={PacMimage} height="250" width="200" />
        </a>
        
      </div>
    </div>
  );
}
