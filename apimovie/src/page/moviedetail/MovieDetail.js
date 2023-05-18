import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData = () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    axios
    .get(url)
    .then((res) => {
        console.log(res.data);
        setData(res.data.results);
      })
  };
  return(
    <div></div>
  )
};
export default MovieDetail;
