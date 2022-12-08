import "./About.css";
import selfie from "../../imgs/color.jpg";

export default function About() {
  return (
    
    <div className="page" id="about">
      <h1 className="aboutMe"> About Me </h1>
      <img alt="selfie" id="self" src={selfie} />

      <p className="intro">
      I'm Juan, and I am a full-stack web developer. Previous limited experience I had with web design sparked an interest in web development that I was thrilled to pursue, and the more I learn the more I feel at home in the industry.<br/>
      <br/> Having the knowledge and skills to make websites and applications come to life from the ground up gratifies a part of me that truly enjoys problem-solving and the production process. I am an effective communicator, collaborator, critical thinker, and project organizer, and I hope these skills along with my continued education in the field will bolster my capability as a web dev and help me help others bring their ideas to life on the web efficiently and creatively.
      </p>
    </div>
    
  );
}
