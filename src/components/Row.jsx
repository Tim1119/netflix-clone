import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  const opts ={
      height:"390",
      width:"100%",
      playerVars:{
        autoplay:1,
      }
  }

  const handleClick = (movie) =>{
      if (trailerUrl){
        setTrailerUrl('')
      }
      else{
        movieTrailer(movie?.name|| "")
        .then((url) =>{
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((error)=> console.log(error))
      }
  }

  return (
    <div className=" text-white ml-[20px] flex flex-col ">
      <h2 className="text-xl font-bold capitalize" >{title}</h2>

      <div className="movie_poster__scrollbar gap-3 flex overflow-y-hidden overflow-x-scroll p-[20px]">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`${isLargeRow && "large_row" } movie_poster`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} ></YouTube>}
    </div>
  );
};

export default Row;
