import React, { Component } from "react";
import cx from 'classnames';

import './SecondaryLogo.scss'

export default class SecondaryLogo extends Component {

  render() {
    return (
      <div className={cx("SecondaryLogo flex justify-end absolute w100")}>
        <img className={cx("md:col-1 col-2 mr2")} src={this.props.src} alt="" />
      </div>
    )
  }
}
