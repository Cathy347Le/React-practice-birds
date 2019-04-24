import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BirdList.css";

class BirdList extends Component {
  render() {
    // console.log(this.props.birds);
    let birdArray = this.props.birds.map((bird, index) => {
      return (
        <Link to={"/bird/" + bird.name} key={index}>
          <img src={bird.image} alt={bird.name} />
        </Link>
      );
    });
    return (
      <div>
        <div className="bird-title">
          <h2>List of Birds</h2>
        </div>
        <div className="bird-card">{birdArray}</div>
      </div>
    );
  }
}

export default BirdList;
