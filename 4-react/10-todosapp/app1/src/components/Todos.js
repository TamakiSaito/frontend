import React, { useState, useEffect } from "react";
import "./Todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  // keyが重複しないように作成
  const [todoKey, setTodoKey] = useState(0);

  // Mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((item) => item.useId === 1);
        setTodos(result);
        setTodoKey(result.length + 1);
      });
  }, []);

  const render = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <div>
          <span className="todoTitle" onClick={() => modTodo(todo.id)}>
            #{todo.id} / {todo.title}
          </span>
          <span className="todoCompleted" onClick={() => modTodo(todo.id)}>
            {todo.completed ? "DONE ✅" : "TODO"}
          </span>
          <button className="todoBtn" onClick={() => delTodo(todo.id)}>
            ❌
          </button>
        </div>
      </div>
    );
  });

  // Insert 
  // setTodosに(addItem)を入れて変更させる
  // inputTextにSENDボタンを押したものが入って
  // { id: todoKey, title: inputText }に表示させる
  const addTodo = (inputText) => {
    const addItem = [...todos, { id: todoKey, title: inputText }];
    // 既存のkey + 1
    setTodoKey(todoKey + 1);
    setTodos(addItem);
    // SENDボタンを押したらテキストをクリアする
    setInputText("");
  };

  // Delete
  // もらったidと同じだったら削除
  const delTodo = (id) => {
    const delItem = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(delItem);
  };

  // Update
  const modTodo = (id) => {
    const modItem = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setTodos(modItem);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <input
          type="text"
          placeholder="New Todo"
          value={inputText}
          // inputTextの中身を変更する
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        {/* SENDボタンをクリックしたらinputTextの内容をaddTodoに */}
        <button onClick={() => addTodo(inputText)}>SEND</button>
      </div>
      <div>{render}</div>
    </div>
  );
}
