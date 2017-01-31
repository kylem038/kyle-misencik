import React from 'react';

const Footer = () => {
  const facebookLogo = require('../images/facebook.svg');
  const instagramLogo = require('../images/instagram.svg');
  const linkedinLogo = require('../images/linkedin.svg');

  return(
    <footer>
      <h2>Learn More About Me</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/kylemisencik"  target="_blank">
          <img src={linkedinLogo} role="presentation" /></a></li>
        <li><a href="https://www.instagram.com/kylemisencik/" target="_blank">
          <img src={instagramLogo} role="presentation" /></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=7722680" target="_blank">
          <img src={facebookLogo} role="presentation" /></a></li>
      </ul>
    </footer>
  )
};

export default Footer;
