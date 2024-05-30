import { useState } from "react";

export default function useInputUtil(options) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (newValue, options) => {
    const {
      maxLength = 100,
      minLength = 0,
      required = false,
      noDpecialChars = false,
    } = options;

    if (required && !newValue) {
      setError("この項目は必須です");
      return false;
    }
    if (newValue.length > maxLength) {
      setError(`${maxLength}文字以上は入力できません`);
      return false;
    }
    if (newValue.length > minLength) {
      setError(`${minLength}文字未満は入力できません`);
      return false;
    }
    if (noDpecialChars && /[^a-zA-Z0-9]/.test(newValue)) {
      setError("特殊文字を入力できません");
      return false;
    }
    setError(null);
    return true;
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    validate(newValue, options);
  };

  return {
    value,
    error,
    onChange,
  };
}
