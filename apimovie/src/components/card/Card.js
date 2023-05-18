import { Link } from "react-router-dom";
import "./Card.css"
const Cards = (props) => {
  const { movie } = props;
  return (
    <>
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="cards">
          <img
            className="cards_image"
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ""
            }`}
          />
          <div className="cards_overlay">
            <div className="card_title">
              {movie ? movie.original_title : ""}
            </div>
            <div className="cards_runtime">
              {movie ? movie.release_date : ""}
              <span className="card_rating">
                {movie ? movie.vote_average : ""}
                <i className="fas fa-star" />
              </span>
            </div>
            <div className="card_description">
              {movie ? movie.overview.slice(0, 118) + "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Cards;
