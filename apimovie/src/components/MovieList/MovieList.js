import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../card/Card";
import "./MovieList.css"
const MovieList = () => {
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMovieList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="movie_list">
      <h2 className="lists_title"></h2>
      <div className="list_cards">
        {movieList &&
          movieList.map((movie, index) => (
          <Cards key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
