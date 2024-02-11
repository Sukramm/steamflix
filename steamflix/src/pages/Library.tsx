import { useState } from "react";
import "../styles/Library/LibraryMain.scss";

type Movie = {
  movieName: string;
  genre: string;
  img: string;
  length: string;
  rating: number;
};

function Library() {
  const movies = [
    {
      movieName: "Titanic",
      genre: "Drama",
      img: "titanic.jpg",
      length: "3h 15min",
      rating: 7.8,
    },
    {
      movieName: "The Shawshank Redemption",
      genre: "Drama",
      img: "shawshank.jpg",
      length: "2h 22min",
      rating: 9.3,
    },
    {
      movieName: "Inception",
      genre: "Sci-Fi",
      img: "inception.jpg",
      length: "2h 28min",
      rating: 8.8,
    },
    {
      movieName: "The Godfather",
      genre: "Crime",
      img: "godfather.jpg",
      length: "2h 55min",
      rating: 9.2,
    },
    {
      movieName: "Pulp Fiction",
      genre: "Crime",
      img: "pulpfiction.jpg",
      length: "2h 34min",
      rating: 8.9,
    },
    {
      movieName: "The Dark Knight",
      genre: "Action",
      img: "darkknight.jpg",
      length: "2h 32min",
      rating: 9.0,
    },
    {
      movieName: "Forrest Gump",
      genre: "Drama",
      img: "forrestgump.jpg",
      length: "2h 22min",
      rating: 8.8,
    },
    {
      movieName: "The Matrix",
      genre: "Sci-Fi",
      img: "matrix.jpg",
      length: "2h 16min",
      rating: 8.7,
    },
    {
      movieName: "Schindler's List",
      genre: "Drama",
      img: "schindlerslist.jpg",
      length: "3h 15min",
      rating: 8.9,
    },
    // Add more movies as needed
  ];

  const [activeMovie, setActiveMovie] = useState<Movie | null>(null);

  return (
    <div id="Library">
      <div className="libraryWrap">
        <div className="left">
          <div className="leftWrap">
            <div className="movieList">
              {movies.map((movie, index) => (
                <div className={`movie ${movie.movieName}`} key={index}>
                  <button onClick={() => setActiveMovie(movie)}>
                    {movie.movieName}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightWrap">
            <div className="movieInfo">
              <div className="movieBanner">
                <h2 className="movieTitle">
                  {activeMovie ? activeMovie.movieName : "HOME"}
                </h2>
                <p>Genre : {activeMovie?.genre}</p>
                <p>Lenght : {activeMovie?.length}</p>
                <div className="movieOptions">
                  <div className="optionsWrap">
                    <button>Play</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
