
const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/film-strip-background-with-clapper-board_1017-33456.jpg?t=st=1717426526~exp=1717430126~hmac=512a7b4354adf57fe8402e72d3d96f55697b5962dfc0f61373ae3e5d4138e5f5&w=826')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
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
