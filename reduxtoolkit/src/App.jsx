import { useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
