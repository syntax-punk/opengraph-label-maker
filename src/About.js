import React from "react";

function About() {
  return (
    <section className="about-container">
      <h2>Labeler</h2>
      <p>Need a nice looking label for your blogpost or a nice looking banner?</p>
      <img src="https://labeler.syntaxpunk.com/label?title=Hello world&handle=syntaxpunk&height=400&width=400&tags=react,netlify,webpack" height={400} width={400} alt="Hello world" />
    </section>
  );
}

export default About;