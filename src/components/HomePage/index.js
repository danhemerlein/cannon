import React, { Component } from "react";

import './HomePage.scss'
import cx from 'classnames';

import RainCloud from "components/Icons/RainCloud";
import Storm from "components/Icons/Storm";


export default class HomePage extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className={cx("HomePage overflow-hidden w100 vh100 ")}>
        <div style={{ backgroundImage: "url('/assets/cannon.jpg')" }} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex justify-between")}>
          <div className={cx("HomePage__svg-container")}>
            <RainCloud></RainCloud>
            <Storm></Storm>
          </div>
        </div>
      </div>
    )
  }
}
