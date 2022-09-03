import "./About.css";
import selfie from "../../imgs/color.jpg";

export default function About() {
  return (
    <div className="page" id="about">
      <h1 className="aboutMe"> About Me </h1>
      <img alt = "selfie" id= "self" src= {selfie} height="300"/>

      <p className="intro">
        An advocate of learning and gaining experience. My interest in
        technology was ignited in elementary school while waiting my turn to use the one computer in the classroom, and wondering how it worked, since that day I have always yearned to deconstruct and improve software in computers. I'm always eager to take
        on more difficult roles in the workplace, Furthermore I try to consider
        others perspectives to get a better understanding of their thought
        processes in order to create a more engaging team environment. I don't
        like to stay idle and try my best to stay ahead of my tasks. I had a
        strong desire to explore software engineering to combine my partial
        computer skills and have a deeper understanding of what is going on
        behind the scenes of computer programs and applications. I am now
        shifting towards software development under the tutelage of Nebula
        Academy, and looking for an opportunity to learn and grow with a company
        to launch their websites or applications.
      </p>
    </div>
  );
}
