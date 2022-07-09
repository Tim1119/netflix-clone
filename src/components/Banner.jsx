import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // get a random from random and use it to get a random image from the results
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
      return request;
    }
    fetchData();
  }, []);

  console.log("movie", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.description, 150)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
