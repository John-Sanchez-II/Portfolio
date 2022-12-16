import "./Portfolio.css";
import CalcImage from "../../imgs/Calc-project.png";
import PacMimage from "../../imgs/pacman.png";
import notNetflix from "../../imgs/not-netflix.png";
import meMyselfI from "../../imgs/Meself&I.png"

export default function Portfolio() {
  return (
    <div className="page" id="portfolio">
      <h1 className="Port">Portfolio</h1>
      {/* make links open in a new page */}
      <div className="links">
        <a
          className="calcLink"
          href="https://john-sanchez-ii.github.io/Calculator-II/"
          rel="noreferrer"
        >
          <img
            alt="calculator"
            src={CalcImage}
            className="apps"
            height="350"
            width="300"
          />
        </a>
        <a
          className="pacman"
          href="https://john-sanchez-ii.github.io/Game-Project/"
          rel="noreferrer"
        >
          <img
            alt="pacman"
            src={PacMimage}
            className="apps"
            height="350"
            width="300"
          />
        </a>
        <a
          className="notNetflix"
          href="https://imaginative-unicorn-f88fec.netlify.app/"
          rel="noreferrer"
        >
          <img alt="notFlix" src={notNetflix} className="apps" height="350" width="300" />
        </a>
        <a
          className="moodApp"
          href="https://main.d3156uqzn4jd72.amplifyapp.com/"
          rel="noreferrer"
        >
          <img alt="Me&I" src={meMyselfI}
          className="apps" height="350" width="300"
          />
        </a>
      </div>
    </div>
  );
}
