import { useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies");
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie._id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={movie.posterImage}
            alt={movie.title}
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
          <p className="text-gray-600 mb-2">Summary: {movie.summary}</p>
          <p className="text-gray-600 mb-2">Duration: {movie.details.Duration}</p>
          <Link
            to={`/movies/${movie._id}`}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <HiOutlineInformationCircle className="mr-1" />
            See Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movie;
