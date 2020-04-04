import React, { Component } from "react";
import { Link } from "react-router-dom";

import debounce from "utils/debounce";
import "./MusicPage.scss";

export default class MusicPage extends Component {
  setHeight = () => {
    const musicPage = document.querySelector(".MusicPage");

    const nfHeight = window.innerHeight;

    musicPage.style.height = nfHeight + "px";
  };

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  };

  componentDidMount() {
    this.setHeight();

    window.addEventListener("resize", () => {
      this.setHeight();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight);
  }

  render() {
    return (
      <div className="MusicPage headline-serif flex flex-col w100 items-center justify-center flex-column">
        <h3>
          this is the music page
        </h3>
      </div>
    );
  }
}
