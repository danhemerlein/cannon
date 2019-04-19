import React, { Component } from "react";

import './HomePage.scss'
import cx from 'classnames';

export default class HomePage extends Component {

    render() {
    return (
      <div className={cx("HomePage overflow-hidden w100 vh100 ")}>

        <div style={{ backgroundImage: "url('/assets/cannon.jpg')" }} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex justify-between")}>


        </div>
      </div>
    )
  }
}
