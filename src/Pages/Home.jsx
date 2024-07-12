import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Latest from "../Components/Latest/Latest.jsx";
import Trip from "../Components/Trip/Trip.jsx";
import Trending from "../Components/Trending/Trending.jsx";
// import Category from "../Components/Category/Category.jsx";
import Newsletter from "../Components/Newsletter/Newsletter.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Trip />
      <Trending />
      {/* <Category/> */}
      <Newsletter />
    </div>
  );
};

export default Home;
