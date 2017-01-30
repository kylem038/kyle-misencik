import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
