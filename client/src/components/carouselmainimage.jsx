import React from 'react';
import icons from './icons.jsx';
import '../css/carouselmainimage.css';

class CarouselImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-image-container">
        <div onClick={this.props.handleLeftArrowClick} className="left-arrow">{icons.leftArrow}</div>
        <div className='main-image'><img key={this.props.currentImage} src={this.props.imagelist.image}></img></div>
        <div onClick={this.props.handleRightArrowClick} className="right-arrow">{icons.rightArrow}</div>
      </div>
    )
  }
}

export default CarouselImage;