import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/Todo";

function TodoItem({ todo }) {
  const [editeable, setEditable] = useState(false);
  const [message, setMessage] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: message });
    setEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border  border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          editeable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={message}
        readOnly={!editeable}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        disabled={todo.completed}
        onClick={() => {
          if (todo.completed) return;
          if (editeable) {
            editTodo();
          } else setEditable((todo) => !todo);
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-gray-50 border-black/10 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
      >
        {editeable ? "📁" : "📝"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-gray-50 border-black/10 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
