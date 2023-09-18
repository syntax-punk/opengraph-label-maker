import React from "react";

function About() {

  const [loaded, setLoaded] = React.useState(false);

  return (
    <section className="about-container">
      <h1><mark>la</mark>beler</h1>
      <p>Need a nice looking label for your blogpost or a cool placeholder banner?</p>
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
    </section>
  );
}

export default About;