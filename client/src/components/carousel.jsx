import React from 'react';
// import '../css/carousel.css';
import styles from '../css/carousel.module.css';
import CarouselImage from './carouselmainimage.jsx';
import CarouselSidebar from './carouselsidebar';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleImageClick(event, param) {
    this.setState({
        currentImage: param
    });
  }

  handleRightArrowClick(event) {
    let newCurrentImage = this.state.currentImage + 1;
    if (newCurrentImage >= this.props.imagelist.length) {
      newCurrentImage = 0;
    }
    this.setState({
      currentImage: newCurrentImage
    });
  }

  handleLeftArrowClick(event) {
    let newCurrentImage = this.state.currentImage - 1;
    if (newCurrentImage < 0) {
      newCurrentImage = this.props.imagelist.length - 1;
    }
    this.setState({
      currentImage: newCurrentImage
    });
  }

  componentDidMount() {
    this.setState({
      currentImage: this.props.currentImage
    });
  }

  render() {
    let xbutton = <svg onClick={this.props.handleClick} className={styles['x-svg']} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)'}}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>;
    return (
      <div className={styles['carousel-container']}>
        {xbutton}
        <CarouselImage handleLeftArrowClick={this.handleLeftArrowClick} handleRightArrowClick={this.handleRightArrowClick} currentImage={this.state.currentImage} imagelist={this.props.imagelist[this.state.currentImage]}/>
        <CarouselSidebar currentImage={this.state.currentImage} imagelist={this.props.imagelist} handleImageClick={this.handleImageClick}/>
      </div>
    )
  }
}

export default Carousel;