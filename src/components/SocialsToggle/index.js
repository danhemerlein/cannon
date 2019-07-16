import React, { Component } from "react";
import cx from 'classnames';

import './SocialsToggle.scss'

export default class SocialsToggle extends Component {

  render() {
    return (
      <div className={cx("SocialsToggle pointer")} onClick={this.props.clickHandler}>
        {/* <div className={cx("SocialsToggle__bar", { 'SocialsToggle__bar--rotate': this.props.navOpen === true }, { '': this.props.navOpen === false })}></div>
        <div className={cx("SocialsToggle__bar", { 'SocialsToggle__bar--hide': this.props.navOpen === true }, { 'SocialsToggle__bar--hide--show': this.props.navOpen === false })}></div>
        <div className={cx("SocialsToggle__bar", { 'SocialsToggle__bar--rotate-counter': this.props.navOpen === true }, { '': this.props.navOpen === false })}></div> */}

        <div className={cx("SocialsToggle__bar")}></div>
        <div className={cx("SocialsToggle__bar")}></div>
        <div className={cx("SocialsToggle__bar")}></div>
      </div>
    )
  }
}
