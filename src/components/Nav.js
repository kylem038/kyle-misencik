import React from 'react';

const Nav = () => {
  return(
    <header>
      <nav>
        <h1>KM</h1>
        <ul>
          <a href="#about"><li className='navlinks'>About</li></a>
          <a href="#portfolio"><li className='navlinks'>Portfolio</li></a>
          <a href="#testimonials"><li className='navlinks'>Testimonials</li></a>
          <a href="#contact"><li className='navlinks'>Contact</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
