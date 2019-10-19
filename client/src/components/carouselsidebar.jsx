import React from 'react';
import '../css/carouselsidebar.css';

class CarouselSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentMiniGalleryImageCss = {
      border: 'solid 2px #414141',
      opacity: 1
    };

    let miniGalleryTranslate = {
      transform: `translateX(${-(-10 + 48*this.props.currentImage)}px)`
    };

    return (
      <div className="side-panel">
        <div className="mini-gallery">
          {
            this.props.imagelist.map((image, imageIndex) => {
              return <div onClick={(event)=>{this.props.handleImageClick(event, imageIndex)}} style={{...miniGalleryTranslate, ...((imageIndex === this.props.currentImage) ? currentMiniGalleryImageCss : null)}} key={imageIndex} className="mini-gallery-item"><img src={image.image}></img></div>
            })
          }
        </div>
        <div className="caption">
          <p>{this.props.currentImage + 1}/{this.props.imagelist.length}</p>
          <p>{this.props.imagelist[this.props.currentImage].caption}</p>
          <p>{this.props.imagelist[this.props.currentImage].verified ? 'Photo Verified by Airbnb' : null}</p>
        </div>
      </div>
    )
  }
}

export default CarouselSidebar;