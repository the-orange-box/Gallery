import React from 'react';
import '../css/carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    }
  }

  handleClick(event) {
    this.setState({
        currentImage: event.target
    });
  }

  render() {
    let xbutton = <svg className='x-svg' viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)'}}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>;
    let leftArrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>;
    let rightArrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>;

    return (
      <div className="carousel-container">
        {xbutton}
        <div className="main-image-container">
          {leftArrow}
          <div className='main-image'><img src={this.props.imagelist[this.state.currentImage].image}></img></div>
          {rightArrow}
        </div>
        <div className='mini-gallery'>
          {
            this.props.imagelist.map((image, index)=>{
              return <div key={image._id} className="carousel-item"><img src={image.image}></img></div>
            })
          }
        </div>
        <div>
          <p>{this.props.imagelist[this.state.currentImage].caption}</p>
        </div>
      </div>
    )
  }
}

export default Carousel;