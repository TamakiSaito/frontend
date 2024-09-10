import React from "react";
import { useState, useEffect } from "react";
import "./Movie.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // mounted
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
    // responseをもらって、json化して、json化したものがmoviesに入る
    .then((res) => res.json())
    .then((json) => { 
      setMovies(json.data.movies);
     });
  },[]);

  console.log("movies: ", movies);

  // moviesの中のtitleをmapで取得
  const render = movies.map(movie => {
    return (
      <div key={movie.id}>
        <a className="movieTitle" href={movie.url}>{movie.title}</a>
        <img clasName="movieImg" src={movie.large_cover_image} alt={movie.title}></img>
      </div>
    );
  });

  return (
  <div>
    <h1>Movies</h1>
    <div>{render}</div>
    
  </div>
  );
}
