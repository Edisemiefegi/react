import { createContext, useContext } from "react";

export const Todo = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(Todo);
};

export const TodoProvider = Todo.Provider;
