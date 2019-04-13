import React, { Component } from "react";

import './HomePage.scss'
import cx from 'classnames';

export default class HomePage extends Component {

  render() {
    return (
      <div className={cx("HomePage overflow-hidden bg-color-red w100 vh100 p1")}>
        This is the homepage component 
      </div>
    )
  }
}
