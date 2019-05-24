import React, { Component } from "react";
import { Link } from "react-router-dom";

import './NotFound.scss'

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound body-serif flex items-center flex-column">
        <h3 className="mt4">This is a 404 error. Please check the url in your browser</h3>
        <h3>You might want to <Link to="/">Return Home</Link></h3>
      </div>
    )
  }
}
