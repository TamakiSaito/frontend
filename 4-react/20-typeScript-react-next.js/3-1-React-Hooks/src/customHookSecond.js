import React, { useState } from "react";
import useRandomTask from "./useRandomTask";

const CustomHookSecond = () => {
  const [inputText, setInputText] = useState("");
  // 引数にinputTextを渡して、useRandomTaskに連動
  const task = useRandomTask(inputText);

  return (
  <div>
    <form>
      <input 
        type="text" 
        // inputTextは最終的なTodoの番号
        value={inputText} 
        // e.target.valueはinputで入力したtextを吸い取る + setInputTextは入力したinput番号を検知する
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
    {task}
  </div>
)};

export default CustomHookSecond