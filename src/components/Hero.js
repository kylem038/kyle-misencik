import React, { Component } from 'react';
import { TweenMax, staggerFrom, Power2 } from 'gsap';

class Hero extends Component {

  componentDidMount() {
    this.gsapAnimation();
  }

  gsapAnimation(){
    const e1 = this.one;
    const e2 = this.two;
    const e3 = this.three;

    TweenMax.staggerFrom(
      [e1, e2, e3],
      0.7,
      {
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: Power2.easeOut },
      0.12)
  }

  render(){
    return(
      <section className='home-page'>
        <video className='video' autoPlay muted loop>
          <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/536/273557707.mp4.mp4" type="video/mp4"></source>
        </video>
        <div className='value-prop'>
          <h2 ref={(c) => { this.one = c }}><span>Hi, I'm Kyle</span></h2>
          <h2 ref={(c) => { this.two = c }}><span>Front-End Developer & Software Engineer</span></h2>
          <a href="#contact"><button ref={(c) => { this.three = c }}><span>Work With Me</span></button></a>
        </div>
      </section>
    );
  }
};

export default Hero;
