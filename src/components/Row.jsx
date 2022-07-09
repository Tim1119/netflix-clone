import React, { useEffect, useState } from "react";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    // fetchData();
  }, []);

  // console.table(movies);

  return (
    <div className="ml-[20px] flex flex-col ">
      <h2 className="text-xl font-bold capitalize" >{title}</h2>

      <div className="movie_poster__scrollbar gap-3 flex overflow-y-hidden overflow-x-scroll p-[20px]">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${isLargeRow && "large_row" } movie_poster`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
