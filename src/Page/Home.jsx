import Banner from "../Component/Home/Banner";

import Contuct from "./Contuct";

import Movie from "./Movies";
import Series from "./Series";

const Home = () => {
  return (
    <div>
      <Banner />
      <h1 className=" text-left font-bold text-2xl p-4 m-4 text-blue-500 capitalize"> Our Movies</h1>
      <Movie/>
      <h1 className=" text-left font-bold text-2xl text-blue-500 capitalize p-4 m-4"> Our Series :</h1>
      <Series/>
      <Contuct />
    </div>
  );
};

export default Home;
