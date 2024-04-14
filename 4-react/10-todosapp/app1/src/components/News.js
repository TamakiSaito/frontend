/* eslint-disable no-undef */
import React from "react";
import { useState, useEffect } from "react";
import "./News.css";

export default function News() {
  const [news, setNews] = useState([]);

  // mounted
  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, []);

  console.log("news: ", news);

  return (
    <div>
      <h1>News</h1>
      <div>{render}</div>
    </div>
  );
}
