import { useState } from "react";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [writer, setWriter] = useState("");
  const [summary, setSummary] = useState("");
  const [storyline, setStoryline] = useState("");
  const [posterImage, setPosterImage] = useState("");
  const [screenshots, setScreenshots] = useState(["", "", "", "", ""]);
  const [details, setDetails] = useState({
    ReleaseDate: "",
    Duration: "",
    Genre: "",
    Language: "",
    Rating: "",
    Director: "",
  });

  const handleScreenshotChange = (index, value) => {
    const newScreenshots = [...screenshots];
    newScreenshots[index] = value;
    setScreenshots(newScreenshots);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieData = {
      title,
      star,
      writer,
      summary,
      storyline,
      posterImage,
      screenshots,
      details,
    };
  };

  return (
    <div className="max-w bg-fuchsia-200 p-6 rounded-lg shadow-xl shadow-black">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <h1 className="text-3xl text-center font-bold mb-4">Add Movies</h1>
        <div className="border-b-2 border-fuchsia-700 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                id="title"
                className="form-input border-black rounded-md w-full"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="starring"
              >
                Starring:
              </label>
              <input
                id="starring"
                className="form-input border-black rounded-md w-full"
                type="text"
                value={star}
                onChange={(e) => setStar(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="writer"
              >
                Writer:
              </label>
              <input
                id="writer"
                className="form-input border-black rounded-md w-full"
                type="text"
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="summary"
              >
                Summary:
              </label>
              <textarea
                id="summary"
                className="form-input border-black rounded-md w-full"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="storyline"
              >
                Storyline:
              </label>
              <textarea
                id="storyline"
                className="form-input border-black rounded-md w-full"
                value={storyline}
                onChange={(e) => setStoryline(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="posterImage"
              >
                Poster Image URL:
              </label>
              <input
                id="posterImage"
                className="form-input border-black rounded-md w-full"
                type="url"
                value={posterImage}
                onChange={(e) => setPosterImage(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Screenshot Images URLs:
              </label>
              {screenshots.map((screenshot, index) => (
                <input
                  key={index}
                  className="form-input border-black rounded-md w-full mb-2"
                  type="url"
                  value={screenshot}
                  onChange={(e) =>
                    handleScreenshotChange(index, e.target.value)
                  }
                  required
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Movie Details:
              </label>
              <div className="">
                {Object.entries(details).map(([key, value], index) => (
                  <div key={index} className="w-full  px-2 mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-1"
                      htmlFor={key}
                    >
                      {key}:
                    </label>
                    <input
                      id={key}
                      className="form-input border-black rounded-md w-full"
                      type="text"
                      value={value}
                      onChange={(e) =>
                        setDetails({ ...details, [key]: e.target.value })
                      }
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-fuchsia-500 text-center hover:bg-fuchsia-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          <button type="submit"> Add movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
