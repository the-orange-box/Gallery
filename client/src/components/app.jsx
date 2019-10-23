import React from 'react';
import axios from 'axios';
import Gallery from './gallery';
import Carousel from './carousel';
import '../css/app.css';
import ShareModal from './gallerysharemodal.jsx';
import SaveModal from './gallerysavemodal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagelist: [],
      modal: 0, //0: none, 1: carousel, 2: sharemodal, 3: savemodal
      clickedImage: 0
    }

    this.handleModalTrigger = this.handleModalTrigger.bind(this);
  }

  componentDidMount() {
    let pathname = window.location.pathname;
    axios.get(`http://localhost:3000/gallery${pathname}`).then((response) => {
      console.log(response.data);
      this.setState({
        imagelist: response.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  handleModalTrigger(event, modalnumber) {
    let modal;
    let currentImage = 0;
    console.log(modalnumber);
    console.log(event.target.classList);
    if (this.state.modal) { //reset if in a modal
      modal = 0;
    } else if (event.target.src) { //if target has a src, then it is an image
      modal = 1;
      currentImage = this.state.imagelist.findIndex((image) => {
        return image.image === event.target.src;
      });
    } else if (modalnumber === 2) {
      modal = 2;
    } else if (modalnumber === 3) {
      modal = 3;
    } else if (modalnumber === 1){
      modal = 1;
    }
    console.log(modal);
    this.setState({
      modal,
      currentImage
    });
  }

  render() {
    let modal = [
      null,
      <Carousel currentImage={this.state.currentImage} handleClick={this.handleModalTrigger} imagelist={this.state.imagelist} />,
      <ShareModal handleClick={this.handleModalTrigger}/>,
      <SaveModal handleClick={this.handleModalTrigger}/>
    ];
    return (
      <div>
        {modal[this.state.modal]}
        <Gallery handleClick={this.handleModalTrigger} imagelist={this.state.imagelist.slice(0, 5)} />
      </div>
    )
  }
}

export default App;