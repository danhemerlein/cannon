import React, { Component } from "react";
import cx from 'classnames';
import { Link } from "react-router-dom";

import './MainLogo.scss'

export default class MainLogo extends Component {

  render() {
    return (
      <div className={cx("MainLogo flex w100 col-3 md:col-5")}>
        <Link to="/">
          <img className={cx("w100")} src={this.props.src} alt="" />
        </Link>
      </div>
    )
  }
}
