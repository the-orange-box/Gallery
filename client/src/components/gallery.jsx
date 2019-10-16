import React from 'react';
import '../css/gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="gallerycontainer">
        {
          this.props.imagelist.map((image, index)=>{
          return index<5 ? <div key={image._id} onClick={this.props.handleClick}className="galleryitem"><img className="galleryImage" src={image.image}></img></div> : null
        })}
      </div>
    )
  }
}

export default Gallery;