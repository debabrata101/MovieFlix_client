import { useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Series = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/series");
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
      <div key={movie._id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={movie.posterImage}
            alt={movie.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-lg font-semibold">{movie.title}</h2>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-2"><span className="font-bold">Summary:</span> {movie.summary}</p>
          <p className="text-gray-600 mb-2"><span className="font-bold">Duration:</span> {movie.details.Duration}</p>
          <Link
            to={`/series/${movie._id}`}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <HiOutlineInformationCircle className="mr-1" />
            See Details
          </Link>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Series;
