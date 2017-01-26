import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <h2>Hi, my name is Kyle</h2>
        </div>
        <p className="App-intro">
          Ex-SEO Expert Turned Web Developer / Software Engineer
        </p>
      </div>
    );
  }
}

export default App;
