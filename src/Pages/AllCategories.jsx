// src/AllCategories.js
import React from "react";
import img from "../Components/Assets/ss2.png";
import "./CSS/AllCategories.css";

const AllCategories = () => {
  return (
    <div className="all-cards">
      {[...Array(6)].map((_, index) => (
        <div className="card" key={index} style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="category" />
          <div className="card-body">
            <p className="card-text">Category</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
