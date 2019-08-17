import React, { Component } from "react";
import cx from 'classnames';

import './SecondaryLogo.scss'

export default class SecondaryLogo extends Component {

  render() {
    return (
      <div className={cx("SecondaryLogo absolute md:col-1 col-2")}>
        <img className={cx("w100")} src={this.props.src} alt="" />
      </div>
    )
  }
}
