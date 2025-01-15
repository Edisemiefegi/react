import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos, "todoo");

  const dispatch = useDispatch();

  const deleteTodo = (e) => {
    dispatch(removeTodo(e));
  };

  return (
    <div className="w-full">
      Todos
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-400 p-2 mb-2 flex justify-between text-center w-full"
          >
            {todo.text}
            <p onClick={() => deleteTodo(todo.id)} className="cursor-pointer">
              x
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
