import shark from "./shark-punch.gif";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchClick = () => {
    window.open(`https://www.google.com/search?tbm=isch&q=${search}`);
    setSearch("");
  };

  return (
    <div className="App">
      <Navbar/>
      <img src={shark} alt="punch"></img>

      <div>
        <button onClick={searchClick}>Search</button>
        <input
          onInput={updateSearch}
          value={search}
          placeholder="Image Search"/>
        <label>Image Search</label>
      </div>

      <div className="click-container">
        <button onClick={incrementCount}>+</button>
        <h3>Click count: {count}</h3>
        <button onClick={decrementCount}>-</button>
      </div>

    </div>
  );
}

export default App;
