import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
