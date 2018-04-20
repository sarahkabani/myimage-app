import React, { Component } from 'react';
import food from './cath.jpg'
import power from './btw.jpg'
import word from './trp.jpg'
import see from './form.jpg'
import feel from './mj.jpeg'

 // export const random = imgUrls[Math.floor(Math.random()*imgUrls.length)];

 export const imgUrls = [
       word,see,feel,food,power
]

export  default class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentImageIndex: 0

        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);

    }

    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
        this.setState({
            currentImageIndex: index

        });

    }

    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        this.setState({
            currentImageIndex: index

        });
    }

    render () {
        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
      <img src={imgUrls[this.state.currentImageIndex] } style = {{width:100+'%'}}/>
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />

            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (

<div
  className={ `slide-arrow ${direction}` }
  onClick={ clickFunction }>
  { glyph }
</div>

);

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="image-slide" style={styles}></div>
    );
}
