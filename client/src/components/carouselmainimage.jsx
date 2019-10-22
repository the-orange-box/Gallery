import React from 'react';
import icons from './icons.jsx';
import styles from '../css/carouselmainimage.module.css';

class CarouselImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['main-image-container']}>
        <div onClick={this.props.handleLeftArrowClick} className={styles['left-arrow']}>{icons.leftArrow}</div>
        <div className={styles['main-image']}><img key={this.props.currentImage} src={this.props.imagelist.image}></img></div>
        <div onClick={this.props.handleRightArrowClick} className={styles['right-arrow']}>{icons.rightArrow}</div>
      </div>
    )
  }
}

export default CarouselImage;