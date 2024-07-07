import React from "react";
import "./Category1.css";
import { Link } from "react-router-dom";
import sampleImage from "./photo.avif"; // replace with the actual image path

const articles = [
  {
    title: "Love Writing and Sharing",
    category: "Travel",
    date: "January 27, 2018",
    author: "Danny Dover",
    excerpt: "Digirissimoss decims qulis blaridas praesentium voluptatem...",
    image: sampleImage,
  },
  {
    title: "The Ultimate Consumers",
    category: "Magazine",
    date: "January 27, 2018",
    author: "Danny Dover",
    excerpt: "Recideriis voluptasr mosse alibus que...",
    image: sampleImage,
  },
  {
    title: "The Ultimate Consumers",
    category: "Magazine",
    date: "January 27, 2018",
    author: "Danny Dover",
    excerpt: "Recideriis voluptasr mosse alibus que...",
    image: sampleImage,
  },
  {
    title: "The Ultimate Consumers",
    category: "Magazine",
    date: "January 27, 2018",
    author: "Danny Dover",
    excerpt: "Recideriis voluptasr mosse alibus que...",
    image: sampleImage,
  },
  {
    title: "The Ultimate Consumers",
    category: "Magazine",
    date: "January 27, 2018",
    author: "Danny Dover",
    excerpt: "Recideriis voluptasr mosse alibus que...",
    image: sampleImage,
  },
  {
    title: "The Ultimate Consumers",
    category: "Magazine",
    date: "January 27, 2018",
    author: "Danny Dover",
    excerpt: "Recideriis voluptasr mosse alibus que...",
    image: sampleImage,
  },

  // Add more articles as needed
];

const Category1 = () => {
  return (
    <div className="category-page">
      <header className="category-header">
        <div className="category-overlay">
          <h1>Category 1</h1>
          <p>An beautiful wordpress theme for Bloggers & Designers</p>
        </div>
      </header>
      <section className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h4>{article.category}</h4>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="see-more">
        <button>See More</button>
      </div>
      <footer className="category-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Blog Theme</h3>
            <p>
              This theme is for the bloggers, photographers, artists and other
              creatives. There are many styles of images in any of your posts.
            </p>
          </div>
          <div className="footer-section">
            <h3>Comments</h3>
            <p>
              "This is a very good comment on a website. I really agree with
              this."
            </p>
          </div>
          <div className="footer-section">
            <h3>Flickr Widget</h3>
            <p>Widget Content</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Category1;
