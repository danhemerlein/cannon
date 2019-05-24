import React, { Component } from "react";
import { Link } from "react-router-dom";

import debounce from "utils/debounce";

import './HomePage.scss'
import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';

export default class HomePage extends Component {

    setHeight = () => {
      const homePage = document.querySelector('.HomePage');

      const hpHeight = (window.innerHeight - 1);

      homePage.style.height = hpHeight + "px";
    }

    debounceAPHeight = () => {
      debounce(this.setHeight(), 100);
    }

    componentDidMount() {
      this.setHeight();

      window.addEventListener("resize", () => {
        this.setHeight();
      });
    }
    
    render() {      
      const backgroundImage = {
        backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
      };

    return (
      <div className={cx("HomePage overflow-hidden w100")}>
        <div style={backgroundImage} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex items-center justify-between flex-col relative")}>
        
          <div className={cx("mt2 flex justify-center")}>
            {/* <h1 className={cx("HomePage__headline-one ml2 text-center headline-serif color-black bold")}>{this.props.mainTitle}</h1> */}
            <img className={cx("col-3 h100")} src={this.props.logo.fields.file.url} alt=""/>
          </div>

          <Link to="/stuff">
          
            <div className={cx("HomePage__site-link absolute")}>
              <h4 className={cx("relative headline-serif")}>link to</h4>
              <h4 className={cx("relative headline-serif")}>more stuff</h4>
            </div>

          </Link>

          <div className={cx("HomePage__headline-three--container mb2")}>
            <h3 className={cx("HomePage__headline-three text-center headline-serif color-black bold relative")}
            >{this.props.footerTitle}
            </h3>
            <h6 className={cx("text-center headline-serif color-black bold")}>{this.props.footerSubTitle}</h6>
          </div>

          <div className={cx("HomePage__social-container self-end absolute")}>

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
