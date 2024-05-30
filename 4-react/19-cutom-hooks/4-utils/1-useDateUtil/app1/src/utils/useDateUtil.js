import { useState } from "react";

export default function useDateUtil() {
  const [currentDate] = useState(new Date());

  const formatDate = (date, format = "YYYY-MM-DD") => {
    // date objectから歳を取得して YYYY 変数に保存
    const YYYY = date.getFullYear();
    // date objectから歳を取得して MM 変数に保存
    const MM = String(date.getMonth() + 1).padStart(2, "0");
    // date objectから歳を取得して DD 変数に保存
    const DD = String(date.getDate()).padStart(2, "0");
    const HH = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");

    if (format === "YYYY-MM-DD HH:mm") {
      return `${YYYY}-${MM}-${DD} ${HH}:${mm}`;
    }
    if (format === "YYYY/MM/DD") {
      return `${YYYY}/${MM}/${DD}`;
    }
    // 他のフォーマットも必要ならここに追加可能
    return `${YYYY}-${MM}-${DD}`;
  };
  return {
    currentDate,
    formatDate,
  };
}
