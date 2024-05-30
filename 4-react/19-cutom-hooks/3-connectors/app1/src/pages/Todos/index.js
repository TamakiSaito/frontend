import React, { useState } from "react";
import Label from "../../components/Atoms/Label";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import NormalButton from "../../components/Atoms/NormalButton";
import useTodos from "../../composables/useTodos";

export default function Todos() {
  const todos = useTodos();

  const [inputText, setInputText] = useState("");

  // Mounted
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const result = json.filter((item) => item.useId === 1);
  //       setTodos(result);
  //       setTodoKey(result.length + 1);
  //     });
  // }, []);

  const render = todos.todos.map((todo) => {
    return (
      <div key={todo.id}>
        <div>
          <span
            className={
              todo.completed ? "text-gray-500 line-through" : "font-bold"
            }
            onClick={() => toggleTodo(todo.id)}
          >
            #{todo.id} / {todo.title}
          </span>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <IconButton aria-label="delete" onClick={() => delTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  });

  // Methods
  const addTodo = (inputText) => {
    todos.addTodo(inputText);
    setInputText("");
  };

  const delTodo = (id) => {
    todos.delTodo(id);
  };

  const toggleTodo = (id) => {
    todos.toggleTodo(id);
  };

  return (
    <div>
      <Label text="Todos" />

      <div className="mb-[20px]">
        <span className="mr-[5px]">
          <TextField
            value={inputText}
            size="small"
            required
            placeholder="New Todo"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></TextField>
        </span>
        <NormalButton buttonText="SEND" onClick={() => addTodo(inputText)} />
      </div>
      <div>{render}</div>
    </div>
  );
}
