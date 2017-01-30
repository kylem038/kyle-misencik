import React from 'react';

const Hero = () => {
  return(
    <section className='home-page'>
      <a id="about"></a>
      <video className='video' autoPlay muted loop>
        <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/536/273557707.mp4.mp4" type="video/mp4"></source>
      </video>
      <div className='value-prop'>
        <h2><span>Hi, I'm Kyle</span></h2>
        <h2><span>Front-End Developer & Software Engineer</span></h2>
        <h2><span>Located In Denver, CO</span></h2>
      </div>
    </section>
  );
};

export default Hero;
