import React from 'react';
import { Slide } from 'react-slideshow-image';

import slide_2 from '../images/slide_2.jpg';
import slide_3 from '../images/slide_3.jpg';
import slide_4 from '../images/slide_4.jpg';
import slide_5 from '../images/slide_5.jpg';


const slideImages =[
    slide_2,
  slide_3, 
  slide_4,
  slide_5

];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const SlideShow = () => {
    return (
    <div className="slide-container">
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <span>Learn How to Sew</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <span>Learn to Cook Vegan Meals</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          <span>Learn JavaScript</span>
        </div>
      </div>

      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          <span>Learn to Cut Hair</span>
        </div>
      </div>
    </Slide>
  </div>
    )
}

export default SlideShow;