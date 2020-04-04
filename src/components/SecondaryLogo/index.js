import React, { Component } from "react";
import cx from 'classnames';

import './SecondaryLogo.scss'

export default class SecondaryLogo extends Component {

  render() {
    return (
      <div
        className={cx(
          "SecondaryLogo flex absolute flex-col items-end"
        )}
      >
        <img
          className={cx("SecondaryLogo__img mb_5")}
          src={this.props.src}
          alt=""
        />
        <p
          className={cx(
            "color-black droid"
          )}
        >
          OVER EASY MUSIC, LLC
        </p>
      </div>
    );
  }
}
