import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          About MovieFlix
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Welcome to MovieFlix, your ultimate destination for streaming the
          latest and greatest movies and TV shows. Our mission is to provide an
          unparalleled viewing experience with an extensive library of content
          that caters to all tastes.
        </p>
        <div className="mb-6">
          <Slider {...settings}>
            <div>
              <img
                src="https://source.unsplash.com/random/800x600?movie1"
                alt="Movie 1"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/800x600?movie2"
                alt="Movie 2"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/800x600?movie3"
                alt="Movie 3"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/800x600?movie4"
                alt="Movie 4"
                className="w-full h-auto rounded-md"
              />
            </div>
          </Slider>
        </div>
        <p className="text-gray-700 text-center">
          At MovieFlix, we believe in the power of storytelling and strive to
          bring you closer to the stories that matter. Join us today and explore
          a world of endless entertainment.
        </p>
      </div>
    </div>
  );
};

export default About;
