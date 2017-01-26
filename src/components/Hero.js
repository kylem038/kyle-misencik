import React from 'react';

const Hero = () => {
  return(
    <section className='home-page'>
      <a id="about"></a>
      <video className='video' autoPlay muted loop>
        <source src="https://s3.amazonaws.com/distill-videos/videos/processed/1385/clouds_over_the_mountain_hd_stock_video.mp4.mp4" type="video/mp4"></source>
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
