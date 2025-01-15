import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 p-2 "
          placeholder="enter text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="p-2 text-white bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
}

export default Addtodo;
