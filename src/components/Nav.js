import React, { Component } from 'react';
import { TweenLite } from 'gsap';

class Nav extends Component {

  animateHeader() {
    const logo = document.getElementById('logo');
    TweenLite.to(logo, 10, {color:"black"});
  }

  componentDidMount() {
    this.animateHeader();
  }

  render() {
    return(
      <header>
        <nav>
          <h1 id='logo'>KM</h1>
          <ul>
            <a href="#about"><li className='navlinks'>About</li></a>
            <a href="#portfolio"><li className='navlinks'>Portfolio</li></a>
            <a href="#testimonials"><li className='navlinks'>Testimonials</li></a>
            <a href="#contact"><li className='navlinks'>Contact</li></a>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Nav;
