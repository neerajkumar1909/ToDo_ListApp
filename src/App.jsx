import { useState } from "react";
import "./App.css";
import InputContainer from "./InputContainer";
import ToDoContainer from "./ToDoContainer";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputValue(e.target.value);
  }


  function addTodos() {
    setTodos((prevTodo) => [...prevTodo, inputValue]);
    setInputValue("");
  }

  function deleteTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodoIndex) => {
        return prevTodoIndex != todoIndex;
      })
    );
  }

  // console.log(todos);
  return (
    <>
      <main>
        <h1>To-Do List</h1>

        <InputContainer
          inputValue={inputValue}
          writeTodo={writeTodo}
          addTodos={addTodos}
         
        />

        <ToDoContainer todos={todos} deleteTodo={deleteTodo} />
      </main>
    </>
  );
}

export default App;
