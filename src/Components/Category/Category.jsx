import React from 'react'
import './Category.css'
import image from '../Assets/trend.jpg' // Replace with the actual path to your image

const Category = () => {
  return (
    <div className="category-container">
      <div className="left-div">
        <img src={image} alt="Category" />
      </div>
      <div className="right-div">
        <h2>Food</h2>
        <h2 className="lifestyle">Lifestyle</h2>
        <h2>Fashion</h2>
        <h2>Technology</h2>
      </div>
    </div>
  )
}

export default Category
