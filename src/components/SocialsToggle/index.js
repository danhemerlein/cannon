import React, { Component } from "react";
import cx from 'classnames';

import './SocialsToggle.scss'

export default class SocialsToggle extends Component {

  render() {
    return (
      <div className={cx("SocialsToggle pointer")} onClick={this.props.clickHandler}>
        <div className={cx("SocialsToggle__bar")}></div>
        <div className={cx("SocialsToggle__bar")}></div>
        <div className={cx("SocialsToggle__bar")}></div>
      </div>
    )
  }
}
