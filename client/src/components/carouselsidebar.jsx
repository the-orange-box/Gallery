import React from 'react';
import '../css/carouselsidebar.css';

class CarouselSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.currentImage);
    const currentMiniGalleryImageCss = {
      border: 'solid 2px #414141',
      opacity: 1
    };

    let miniGalleryImages = [];
    let imagelist = this.props.imagelist;
    let numberofimages = 5 < imagelist.length ? 5 : 3; //odd
    // determine which images to display
    for (let i = -(Math.floor(numberofimages/4)); i <= Math.floor(numberofimages/2); i++) {
      let currentIndex = this.props.currentImage + i;
      if (currentIndex < 0) {
        currentIndex = currentIndex + imagelist.length;
      } else if (currentIndex > (imagelist.length - 1)) {
        currentIndex = currentIndex % imagelist.length;
      }
      miniGalleryImages.push(currentIndex);
    }

    return (
      <div className="side-panel">
        <div className="mini-gallery">
          {
            miniGalleryImages.map((imageIndex) => {
              return <div onClick={(event)=>{this.props.handleImageClick(event, imageIndex)}} style={(imageIndex === this.props.currentImage) ? currentMiniGalleryImageCss : null} test={imageIndex} key={imageIndex} className="mini-gallery-item"><img src={this.props.imagelist[imageIndex].image}></img></div>
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