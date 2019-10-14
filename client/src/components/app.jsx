import React from 'react';
import axios from 'axios';
import Gallery from './gallery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagelist: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/gallery/10').then((response)=>{
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <Gallery imagelist/>
      </div>
    )
  }
}

export default App;