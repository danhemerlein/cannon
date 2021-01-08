import React, { Component } from "react";
import './styles.scss'

export default class OneOfThree extends Component {

  render() {
    const backgroundImage = {
      backgroundImage: "url('/assets/one-of-three.jpg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <div className="OneOfThree p1" style={backgroundImage}></div>
    );
  }
}
