import React, { useEffect, useState } from "react";

const CustomHook = () => {
  const [task, setTask] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      // 「setTask」に(data.title)を取得して、「task」に渡す
      .then((data) => setTask(data.title));
    };
    fetchData();
  }, []);
  // 「task」に(data.title)が表示される
  return <div>{task}</div>
};

export default CustomHook;