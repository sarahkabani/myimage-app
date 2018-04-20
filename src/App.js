import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import CarouselImageComponent from './ImageComp';
import HelloComponent from './HelloComp';

class App extends Component {




  render() {
    // console.log('i have mounted from render');
    return (
      <div className="Carousel">
      <CarouselImageComponent />
        <HelloComponent />

      {/* {imgUrls} */}
      </div>

    );
  }
}

export default App;
