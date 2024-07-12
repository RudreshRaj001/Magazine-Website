import React from "react";
import "./CSS/About.css";
import teamPhoto from "../Components/Assets/hello.jpg"; // Ensure you have a team photo
import missionPhoto from "../Components/Assets/hello.jpg"; // Ensure you have a mission photo

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Get to know more about our magazine, our mission, and our amazing
          team.
        </p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At [Magazine Name], our mission is to deliver insightful, inspiring,
            and engaging content that resonates with our readers. We believe in
            the power of storytelling to inform, entertain, and inspire.
          </p>
        </div>
        <div className="about-image">
          <img src={missionPhoto} alt="Our Mission" />
        </div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img src={teamPhoto} alt="Our Team" />
        </div>
        <div className="about-content">
          <h2>Meet Our Team</h2>
          <p>
            Our team is composed of passionate writers, editors, and creatives
            who are dedicated to bringing you the best content. Each team member
            brings unique skills and perspectives to the table, making our
            magazine diverse and dynamic.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content-full">
          <h2>What We Cover</h2>
          <p>
            We cover a wide range of topics, including fashion, lifestyle,
            technology, culture, and more. Our goal is to keep you informed and
            entertained with high-quality articles, stunning visuals, and
            thought-provoking stories.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
