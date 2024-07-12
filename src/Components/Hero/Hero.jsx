import React from "react";
import { Carousel } from "react-bootstrap";
import image from "../Assets/her.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First Slide Title</h3>
          <p>Description for the first slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Slide Title</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third Slide Title</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
