import React, { Component } from "react";
import { Link } from "react-router-dom";

import debounce from "utils/debounce";
import './NotFound.scss'

export default class NotFound extends Component {

  // FIX THIS HEIGHT SETTING CHAIN

  setHeight = () => {
    const notFound = document.querySelector('.NotFound');

    const nfHeight = (window.innerHeight);

    notFound.style.height = nfHeight + "px";
  }

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  }

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
      <div className="NotFound headline-serif flex flex-col w100 items-center justify-center flex-column bg-color-black color-white droid">
        <h3 className="">
          <Link to="/">This is a 404 error. Please check the url in your browser</Link>
        </h3>
        <h3 className="mt2">
          <Link to="/">You might want to return home</Link>
        </h3>
      </div>
    );
  }
}
