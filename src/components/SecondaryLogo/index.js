import React, { Component } from "react";
import cx from 'classnames';

import './SecondaryLogo.scss'

export default class SecondaryLogo extends Component {

  render() {
    return (
      <div className={cx("SecondaryLogo flex items-end absolute w100 items-end flex-col")}>
        <img className={cx("SecondaryLogo__img md:col-1 col-2 mr1 md:mr2")} src={this.props.src} alt="" />
        <p className={cx("SecondaryLogo__paragraph color-white futura mr1 md:mr2")}>over easy music, llc</p>
      </div>
    )
  }
}
