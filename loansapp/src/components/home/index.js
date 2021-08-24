import React, {Component} from 'react';
import Navbar from './../navbar';
import './style.scss';

  
class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {}
  }

  render() {
    return (
      <div className="home">
        <Navbar/>
        <div className="container">
          <div className="title">
            <h1>Welcome to loans app</h1>
            <h3>The best place to get a loan</h3>
            <h3>By the best people ever</h3>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;