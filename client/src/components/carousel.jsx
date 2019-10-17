import React from 'react';
import '../css/carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    }

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  handleClick(event) {
    this.setState({
        currentImage: event.target
    });
  }

  componentDidMount() {
    this.setState({
      currentImage: this.props.currentImage
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

  render() {
    let xbutton = <svg onClick={this.props.handleClick} className='x-svg' viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)'}}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>;
    let leftArrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
    let rightArrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>;

    const currentMiniGalleryImageCss = {
      border: 'solid 2px #484848'
    };

    let miniGalleryImages = [];
    let imagelist = this.props.imagelist;
    let numberofimages = 5 < imagelist.length ? 5 : 3; //odd
    // determine which images to display
    for (let i = -(Math.floor(numberofimages/2)); i <= Math.floor(numberofimages/2); i++) {
      let currentIndex = this.state.currentImage + i;
      if (currentIndex < 0) {
        currentIndex = currentIndex + imagelist.length;
      } else if (currentIndex > (imagelist.length - 1)) {
        currentIndex = currentIndex % imagelist.length;
      }
      miniGalleryImages.push(this.props.imagelist[currentIndex]);
    }

    return (
      <div className="carousel-container">
        {xbutton}
        <div className="main-image-container">
          <div onClick={this.handleLeftArrowClick} className="left-arrow">{leftArrow}</div>
          <div className='main-image'><img src={this.props.imagelist[this.state.currentImage].image}></img></div>
          <div onClick={this.handleRightArrowClick} className="right-arrow">{rightArrow}</div>
        </div>
        <div className="side-panel">
          <div className="mini-gallery">
            {
              miniGalleryImages.map((image, index)=>{
                return <div style={(index===this.state.currentImage) ? currentMiniGalleryImageCss : null} key={index} className="mini-gallery-item"><img src={image.image}></img></div>
              })
            }
          </div>
            <div className="caption">
              <p>{this.state.currentImage}/{this.props.imagelist.length}</p>
              <p>{this.props.imagelist[this.state.currentImage].caption}</p>
              <p>{this.props.imagelist[this.state.currentImage].verified ? 'Photo Verified by Airbnb' : null}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Carousel;