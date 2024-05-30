import React, { useState, useEffect } from "react";
import Label from "../../components/Atoms/Label";
import useDateUtil from "../../utils/useDateUtil";
import useInputUtil from "../../utils/useInputUtil";
import NormalButton from "../../components/Atoms/NormalButton";

export default function Home() {
  const [username, setUsername] = useState("");
  const [passward, setPassward] = useState("");

  const dateUtil = useDateUtil();
  const formattedDate = dateUtil.formatDate(
    dateUtil.currentDate,
    "YYYY-MM-DD HH:mm"
  );

  const userNameInputUtil = useInputUtil({
    minLength: 5,
    maxLength: 15,
    required: true,
    noSpecialChars: true,
  });
  const passwardInputUtil = useInputUtil({
    minLength: 8,
    maxLength: 20,
    required: true,
  });

  useEffect(() => {
    setUsername(userNameInputUtil.value);
    setPassward(passwardInputUtil.value);
  }, [passwardInputUtil.value, userNameInputUtil.value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userNameInputUtil.error) {
      alert("エラーが発生しました");
      console.log({
        username: userNameInputUtil.error,
        passward: passwardInputUtil.error,
      });
      return;
    }
    alert("問題なく処理を行います");
    console.log("submit: ", { username, passward });
  };

  return (
    <div>
      <Label text="Home" />
      <h2>現在の時刻: {formattedDate}</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="username"
            required
            onChange={userNameInputUtil.onChange}
          />
          <input
            type="text"
            value={passward}
            placeholder="passward"
            required
            onChange={passwardInputUtil.onChange}
          />
          <NormalButton
            className="text-blue-500"
            buttonText="Login"
            type="submit"
            onClick={handleSubmit}
          ></NormalButton>
        </form>

        {/* Error表示 */}
        {userNameInputUtil.error && (
          <p className="text-red-500">
            usernameエラー: {userNameInputUtil.error}
          </p>
        )}
        {passwardInputUtil.error && (
          <p className="text-red-500">
            passwardエラー: {passwardInputUtil.error}
          </p>
        )}
      </div>
    </div>
  );
}
