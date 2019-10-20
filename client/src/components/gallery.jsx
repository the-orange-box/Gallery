import React from 'react';
import '../css/gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shareSvg =  <svg className="share-svg" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2.25" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round"><g fillRule="evenodd"><path d="m11.5 16v-15"></path><path d="m7.5 4 4-3 4 3"></path><path d="m5.4 9.5h-3.9v14h20v-14h-3.1"></path></g></svg>;
    let saveSvg = <svg className="save-svg" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="#484848" strokeWidth="2.25" focusable="false" aria-label="Save this listing." role="img" strokeLinecap="round" strokeLinejoin="round"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg>;

    return (
      <div className="gallerycontainer">
        {
          this.props.imagelist.map((image, index)=>{
          return <div key={index} onClick={this.props.handleClick} className="galleryitem"><img className="galleryImage" src={image.image}></img></div>
        })}
        <div className="gallery-shareandsave">
          <button className="gallery-button gallery-share-button" onClick={this.props.handleClick}>
            {shareSvg}
            Share
          </button>
          <button className="gallery-button gallery-save-button" onClick={this.props.handleClick}>
            {saveSvg}
            Save
          </button>
        </div>
        <button className="gallery-button gallery-view-button" onClick={this.props.handleClick}>View Photos</button>
      </div>
    )
  }
}

export default Gallery;