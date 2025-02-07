import { useState } from "react";
import "./App.css";
import Card from "../components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "edi",
    age: 25,
    address: {
      city: "yen",
      state: "bayelsa",
    },
  };

  let arr = [1, 2, 4, 5];
  return (
    <>
      <h1 className="text-3xl p-3 bg-green-600 font-bold">
        Vite with tailwind !
      </h1>
      <Card username=" edi" age="17" img="/me.jpg" />
      <Card myObj={myObj} />
      <Card username=" apple" arr={arr} />
    </>
  );
}

export default App;
