import React, { Component } from "react";
// import "./Bird.css";

class Bird extends Component {
  render() {
    // console.log(this.props.birds)
    const singleBird = this.props.birds.find(
      bird => bird.name === this.props.match.params.name
    );
    // console.log(singleBird);
    return (
      <div className="bird-container">
        <div className="bird-image">
          <img src={singleBird.image} alt={singleBird.name} />
        </div>
        <div className="bird-info">
          <h1 className="bird-name">{singleBird.name}</h1>
          <p className="bird-genus">({singleBird.genus})</p>
          <span>Conservation Status</span>
          <p> {singleBird.conservationStatus}</p>
          <a href={singleBird.homepage}>Read More</a>
        </div>
      </div>
    );
  }
}

export default Bird;
