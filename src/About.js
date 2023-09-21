import React from "react";

function About() {

  const [loaded, setLoaded] = React.useState(false);

  return (
    <section className="about-container">
      <h1>labeler</h1>
      <p>Need a label for your blogpost or a nice placeholder?</p>
      { loaded === false && <div className="dots-loading"><div/><div/><div/></div> }
      <img 
        src="https://labeler.syntaxpunk.com/label?title=Hello world&handle=syntaxpunk&height=400&width=600&tags=react,netlify" 
        height={400} 
        width={600} 
        style={{opacity: loaded ? 1 : 0}}
        alt="Hello world" 
        onLoad={() => setLoaded(true)}
        />
      { loaded && (
        <>
          <p>This one is auto generated via following link:</p>
          <pre>https://labeler.syntaxpunk.com/label?title=Hello world&handle=syntaxpunk&height=400&width=600&tags=react,netlify</pre>
          <p>You will figure out the rest</p>
        </>
      )}
      <span className="made-with">made with ❤️ by <a href="https://syntaxpunk.com">@syntax-punk 👀</a></span>
    </section>
  );
}

export default About;