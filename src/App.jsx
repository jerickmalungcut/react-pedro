import { useState } from "react";
import TodoList from "./components/TodoList";

import "./App.css";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [name, setName] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setName(value);
  }
  return (
    <>
      <input type="text" placeholder="Name:" onChange={handleChange} />
      <h1>Hello, {name}!</h1>
      <TodoList />
      <SignUpForm />
    </>
  );
}

export default App;
