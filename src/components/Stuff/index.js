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

          <div className={cx("flex justify-center")}>
            <img className={cx("col-3 h100")} src={this.props.logo.fields.file.url} alt="" />
          </div>

          <Link to="/">

            <div className={cx("Stuff__site-link absolute")}>
              <h4 className={cx("relative headline-serif")}>home</h4>
            </div>

          </Link>

          <div className={cx("h100 flex flex-col items-center justify-center")}>
            <span className={cx("headline-serif hauto")}>These</span>
            <span className={cx("headline-serif")}>Are</span>
            <span className={cx("headline-serif")}>Some</span>
            <span className={cx("headline-serif")}>Random</span>
            <span className={cx("headline-serif")}>Words</span>
            <span className={cx("headline-serif")}>Could</span>
            <span className={cx("headline-serif")}>Be</span>
            <span className={cx("headline-serif")}>Tour</span>
            <span className={cx("headline-serif")}>Dates</span>
            <span className={cx("headline-serif")}>Or</span>
            <span className={cx("headline-serif")}>Something</span>
            <span className={cx("headline-serif")}>Else</span>
            {/* <span className={cx("headline-serif")}>The possibilities for this area are endless</span> */}

          
          </div>

          <div className={cx("Stuff__social-container self-end absolute")}>

            <SocialsModule
              soundLinkCTA={this.props.soundLinkCTA}
              instagramLinkCTA={this.props.instagramLinkCTA}
              twitterLinkCTA={this.props.twitterLinkCTA}
            />

          </div>


          <div className={cx("HomePage__headline-three--container mb2")}>

            <h3 className={cx("HomePage__headline-three text-center headline-serif color-black bold relative")}
            >{this.props.footerTitle}
            </h3>
            <h6 className={cx("text-center headline-serif color-black bold")}>{this.props.footerSubTitle}</h6>

          </div>

        </div>
      </div>
    )
  }
}
