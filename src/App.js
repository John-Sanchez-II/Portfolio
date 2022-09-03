import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


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
     
    </div>
  );
}

export default App;
