import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/Todo";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <div>
      <form action="" onSubmit={add} className="flex">
        <input
          value={todo}
          type="text"
          placeholder="write todo..."
          className=" w-full border rounded-l-lg px-3  bg-white/20 py-1.5  "
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
