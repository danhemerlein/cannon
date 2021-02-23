import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import './GoHome.scss';

export default class GoHome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  render() {
    return (
      <div className={cx("GoHome absolute ocr", {
          "GoHome__white ": this.props.white
        })}>
        <Link to="/">home</Link>
      </div>
    )
  }
}
