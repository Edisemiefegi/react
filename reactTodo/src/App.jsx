import { useState } from "react";
import { ModeProvider, TodoProvider } from "./contexts";
import { useEffect } from "react";
import { TodoItem, TodoForm, ToggleMode } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState("dark");

  const darkTheme = () => {
    setMode("dark");
  };

  const lightTheme = () => {
    setMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(mode);
  }, [mode]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...todo } : item))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ModeProvider value={{ mode, darkTheme, lightTheme }}>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div
          className={` w-full h-full min-h-screen flex flex-col py-8 md:py-0 md:justify-center  items-center ${
            mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          } `}
        >
          <div className="flex items-end flex-col gap-2 md:w-2/4 w-2/3">
            <div>
              <ToggleMode />
            </div>
            <div
              className={`w-full  ${
                mode === "dark" ? "" : "border"
              }  p-4 rounded-md shadow-lg  flex flex-col gap-6 items-center`}
            >
              <h1
                className={`font-bold  ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                Mange Your todos
              </h1>
              <div className="w-full">
                <TodoForm />
              </div>

              <div className="flex flex-wrap gap-y-3 w-full">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TodoProvider>
    </ModeProvider>
  );
}

export default App;
