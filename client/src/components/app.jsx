import React from 'react';
import axios from 'axios';
import Gallery from './gallery';
import Carousel from './carousel';
import '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagelist: [],
      carousel: false,
      clickedImage: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let pathname = window.location.pathname;
    axios.get(`http://localhost:3000/gallery${pathname}`).then((response)=>{
      console.log(response.data);
      this.setState({
        imagelist: response.data
      });
    }).catch((err)=>{
      console.log(err);
    });
  }

  handleClick(event) {
    let link = event.target.src;
    let currentImage = this.state.imagelist.findIndex((image)=>{
      return image.image === link;
    });
    this.setState({
      carousel: !this.state.carousel,
      currentImage
    });
  }

  render() {
    return (
      <div>
        {this.state.carousel ? <Carousel currentImage={this.state.currentImage} handleClick={this.handleClick} imagelist={this.state.imagelist}/> : null}
        <Gallery handleClick={this.handleClick} imagelist={this.state.imagelist.slice(0,5)}/>
      </div>
    )
  }
}

export default App;