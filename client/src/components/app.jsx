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
      carousel: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/gallery/1').then((response)=>{
      console.log(response.data);
      this.setState({
        imagelist: response.data
      });
    });
  }

  handleClick() {
    this.setState({
      carousel: !this.state.carousel
    });
  }

  render() {
    return (
      <div>
        {this.state.carousel ? <Carousel handleClick={this.handleClick} imagelist={this.state.imagelist}/> : null}
        <Gallery handleClick={this.handleClick} imagelist={this.state.imagelist}/>
      </div>
    )
  }
}

export default App;