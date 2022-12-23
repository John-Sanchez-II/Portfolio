import "./Contact.css";
import { FaGithubAlt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <div className="page" id="contact">
        <h1 className="Contact">Contact</h1>
        
        <p className="farewellSpeech">
          I'm always looking for opportunities to expand upon my skills and am
          currently seeking a full-time junior web developer position. I'd also love to hear from you if you have any questions,
          are looking to network, or would like to chat about any projects I can
          help with.
        </p>
        <div className="icons">
          <a className="github" href="https://github.com/John-Sanchez-II">
            <FaGithubAlt />
          </a>
          <a
            className="codeWars"
            href="https://www.codewars.com/users/John-Sanchez-II"
          >
            <SiCodewars />
          </a>
          <a
            className="linkedIn"
            href="https://www.linkedin.com/in/juan-a-sanchez/"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
      
      </div>
      <div className="located">
        <h3> Location</h3>
        <p className="island">Long Island, New York</p>
      </div>
    </>
  );
}
