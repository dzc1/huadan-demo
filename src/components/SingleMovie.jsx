import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styling/singlemovie.css";
import Footer from "./Footer";

const SingleMovie = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      // fetch(
      //   `https://api.themoviedb.org/3/movie/${id}?api_key=e01b60fa6da2e1ede91bae74e8d84c78&language=en-US`
      // )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSingleMovie(data);
      })
      .catch((error) => console.error("Error fetching single movie: ", error));
  }, [id]);

  const backButton = () => {
    navigate("/");
  };
  return (
    <>
      {/* set the 1280 poster as the background */}
      <div
        className="single-movie-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),url(http://image.tmdb.org/t/p/w1280/${singleMovie.backdrop_path})`,
        }}
      >
        {/* click the button, then back to movies */}
        <button className="backbtn" type="button" onClick={backButton}>
          🎬 Back to Movies
        </button>
        {/* show the single image on the side */}
        <section className="details-container">
          <img
            className="single-movie-poster"
            src={`http://image.tmdb.org/t/p/w342/${singleMovie.poster_path}`}
            alt="poster"
          />
          {/* show single movie details */}
          <div className="single-movie-details">
            <h1>{singleMovie.title}</h1>
            <p className="average">
              ⭐️&nbsp;&nbsp;{Math.round(singleMovie.vote_average * 10) / 10}
            </p>
            {/* show overview */}
            <p className="overview">{singleMovie.overview}</p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SingleMovie;
