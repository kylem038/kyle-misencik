import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <AboutMe />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
