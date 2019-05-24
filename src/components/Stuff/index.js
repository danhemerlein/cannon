import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';

import './Stuff.scss'

export default class Stuff extends Component {
  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    return (
      <div className="Stuff overflow-hidden w100">
        <div style={backgroundImage} className={cx("h100 bg-cover overflow-hidden flex items-center justify-between flex-col relative")}>
          <div className={cx("mt2 flex justify-center")}>
            <img className={cx("col-3 h100")} src={this.props.logo.fields.file.url} alt="" />
          </div>

          <Link to="/">

            <div className={cx("Stuff__site-link absolute")}>
              <h4 className={cx("relative headline-serif")}>home</h4>
            </div>

          </Link>

          <span>These</span>
          <span>Are</span>
          <span>Some</span>
          <span>Random</span>
          <span>Words</span>
          <span>The possibilities for this area are endless</span>

          <div className={cx("Stuff__social-container self-end absolute")}>

            <SocialsModule
              soundLinkCTA={this.props.soundLinkCTA}
              instagramLinkCTA={this.props.instagramLinkCTA}
              twitterLinkCTA={this.props.twitterLinkCTA}
            />

          </div>

        </div>
      </div>
    )
  }
}
