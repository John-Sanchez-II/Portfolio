import "./NavBar.css"
import { scrollToElement } from "../../Helper";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <button>Home</button>
      <button onClick={()=>scrollToElement("#about")}>About</button>
      <button>Portfolio</button>
      <button>Contact</button>
      <button>Resume</button>
    </div>
  );
}
