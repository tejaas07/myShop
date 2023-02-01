import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePages from "./Pages/HomePages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <HomePages />
    </div>
  );
}

export default App;
