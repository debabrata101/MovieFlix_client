/* eslint-disable no-unused-vars */
import axios from "axios";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const SeriesDetails = () => {
  const token = localStorage.getItem("token");
  const movie = useLoaderData();
  const {
    _id,
    title,
    star,
    writer,
    summary,
    storyline,
    posterImage,
    screenshots,
    details,
  } = movie;
  const handleDelete = async () => {
    await axios
      .delete(`https://movie-flix-server-413x.vercel.app/series/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Product Deleted !");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error deleting product");
      });
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-64 md:mr-4">
          <img
            src={posterImage}
            alt={title}
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">Star: {star}</p>
          <p className="text-gray-600 mb-2">Writer: {writer}</p>
          <p className="text-gray-600 mb-2">Summary: {summary}</p>
          <div className="flex flex-wrap mb-2">
            {screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index}`}
                className="w-16 h-16 object-cover mr-2 mb-2"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-gray-600 mt-4">
        <p>Release Date: {details.ReleaseDate}</p>
        <p>Duration: {details.Duration}</p>
        <p>Genre: {details.Genre}</p>
        <p>Language: {details.Language}</p>
        <p>Rating: {details.Rating}</p>
        <p>Director: {details.Director}</p>
        <p>Storyline: {storyline}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <Link
          to={`/edit-series/${_id}`}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaEdit className="mr-1" /> 
        </Link>
        <Link
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaTrash className="mr-1" />
        </Link>
      </div>
    </div>
  );
};

export default SeriesDetails;
