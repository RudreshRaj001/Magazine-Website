import React from "react";
import "./Trending.css";
import { Link } from "react-router-dom";
import Image from "../Assets/photo.avif";
const Trending = () => {
  return (
    <div className="trending">
      {/* Lower Div */}
      <div className="lower-div">
        <h1>Trending Now &#8599;</h1>
      </div>

      {/* Last Div */}
      <div className="last-div">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="line">
            <div>
              <h4>FOOD-#HEALTH-2MIN</h4>
              <h3>Title {index + 1}</h3>
            </div>
            <p>Some descriptive text about the topic...</p>
          </div>
        ))}
      </div>
      {/* Upper Div */}
      <div className="upper-div">
        <div className="categories">
          <Link to="/categories">
            <span>View All</span>
            <span>Categories &#8599;</span>
          </Link>
        </div>
        <div className="health-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            euismod, nisi vel consectetur... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin euismod, nisi vel consectetur...
            .
          </p>
        </div>
      </div>

      {/* Middle Div */}
      <div className="middle-div">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${Image})` }}
            ></div>
            <div className="card-content">
              <h2>Title {index + 1}</h2>
              <p>Description {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
