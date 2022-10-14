import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { FaGithubAlt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";


  // let reviews = []
function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <LandingPage />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div className="icons">
      <a className="github" href="https://github.com/John-Sanchez-II">
        <FaGithubAlt />
        
      </a>
      <a className="codeWars" href="https://www.codewars.com/users/John-Sanchez-II">
        < SiCodewars/>
        
      </a>
      <a className="linkedIn" href="https://www.linkedin.com/in/juan-a-sanchez/">
        <AiOutlineLinkedin/>
      </a>
        
      </div>
    </div>
  );
}

export default App;
