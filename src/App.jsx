import { useState } from "react";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  const [showGreeting, setShowGreeting] = useState(false);
  function toggleGreeting() {
    setShowGreeting(!showGreeting);
    console.log("Hello there!");
  }
  return (
    <>
      <input type="text" placeholder="Name:" />
    </>
  );
}

export default App;
