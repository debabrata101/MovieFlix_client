import banner from "../../assets/banner.jpg"
const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>

      <div className="relative bg-opacity-40 bg-black z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to Movie Flix
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Stream the best movies and TV shows
        </p>
        <button className="custom-btn bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
          <a href="/start-watching" className="text-xl">
            Start Watching
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
