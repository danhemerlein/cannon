import React, { Component } from "react";

import cx from "classnames";
import "./NavOverlay.scss";

export default class NavOverlay extends Component {
  render() {
    return (
      <div
        className={cx(
          "NavOverlay",
          {
            "NavOverlay--active":
              this.props.navOpen === true,
          },
          {
            "NavOverlay":
              this.props.navOpen === false,
          }
        )}
        onClick={this.props.clickHandler}
      ></div>
    );
  }
}
