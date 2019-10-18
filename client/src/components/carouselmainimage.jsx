import React from 'react';
import '../css/carouselmainimage.css';

class CarouselImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let leftArrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'rgb(72, 72, 72)' }}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
    let rightArrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'rgb(72, 72, 72)' }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>;
   
    return (
      <div className="main-image-container">
        <div onClick={this.props.handleLeftArrowClick} className="left-arrow">{leftArrow}</div>
        <div className='main-image'><img key={this.props.currentImage} src={this.props.imagelist.image}></img></div>
        <div onClick={this.props.handleRightArrowClick} className="right-arrow">{rightArrow}</div>
      </div>
    )
  }
}

export default CarouselImage;