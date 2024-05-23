import "./Movie.css";
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieRatingClass = (rating) => {
    return rating >= 9 ? "good" : rating >= 7 ? "soso" : "bad";
  };

  // mounted
  useEffect(() => {
    // Loading中のフラグ
    setIsLoading(true);
    //fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setMovies(json.data.movies);
      });
  }, []);

  console.log("movies: ", movies);

  const loading = (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );

  const render = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <a className="movieTitle" href={movie.url}>
          {movie.title}({movie.year})
        </a>
        <img
          clasName="movieImg"
          src={movie.large_cover_image}
          alt={movie.title}
        ></img>

        <div className="detail">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Click Here To Read More
            </AccordionSummary>
            <AccordionDetails>
              <div>
                評価:
                <Tooltip title={movie.rating + "/10点"} placement="right">
                  <Box
                    display="inline"
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      size="small"
                      name="simple-controlled"
                      readOnly
                      value={movie.rating / 2}
                    />
                  </Box>
                </Tooltip>
              </div>
              <div>ジャンル:{movie.gernes}</div>
              <div>ランタイム:{movie.runtime}分</div>
              <div>ストーリー:{movie.synopsis || "情報なし"}</div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies</h1>
      <div>{isLoading ? loading : render}</div>
    </div>
  );
}
