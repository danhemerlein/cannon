import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';
import debounce from "utils/debounce";

import SocialsModule from 'components/SocialsModule';
import SocialToggle from 'components/SocialsToggle';

import './Stuff.scss'

export default class Stuff extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  setHeightStuff = () => {
    const stuff = document.querySelector('.Stuff');

    const stuffHeight = (window.innerHeight);

    stuff.style.height = stuffHeight + "px";
  }

  debounceStuffHeight = () => {
    debounce(this.setHeightStuff(), 100);
  }

  componentDidMount() {
    this.setHeightStuff();
    window.addEventListener("resize", this.debounceStuffHeight);

    const AveraSans = new FontFace('AveraSans', `url(${this.props.font.fields.file.url})`);

    AveraSans.load().then(function (loadedHand) {
      document.fonts.add(loadedHand);
      document.body.style.fontFamily = '"AveraSans", sans-serif';
    }).catch(function (error) {
      console.error('an error occured while loading the font');
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceStuffHeight);
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    return (
      <div className="Stuff overflow-hidden w100">

        <div style={backgroundImage} className={cx("h100 bg-cover overflow-hidden flex items-center justify-between flex-col relative")}>


            <div className={cx("Stuff__logo-container flex w100")}>
              <Link to="/">
                  <img className={cx("")} src={this.props.logo.fields.file.url} alt="" />
              </Link>
            </div>


          <Link to="/">

            <div className={cx("Stuff__site-link absolute")}>
              <h4 className={cx("relative headline-serif")}>home</h4>
            </div>

          </Link>

          <div className={cx("h100")}></div>

          <div className={cx("HomePage__headline-three--container mb2")}>

            <h3 className={cx("HomePage__headline-three text-center headline-serif bold color-white")}
            >{this.props.footerTitle}
            </h3>
            <h6 className={cx("HomePage__headline-six text-center headline-serif color-white bold")}>{this.props.footerSubTitle}</h6>

          </div>

          <div className={cx("HomePage__social-toggle absolute",
            { 'HomePage__social-toggle--nav-open': this.state.navOpen === true }, { 'HomePage__social-toggle--nav-closed': this.state.navOpen === false }
          )}>

            <SocialToggle
              clickHandler={this.toggleNav}
              navOpen={this.state.navOpen}
            ></SocialToggle>

          </div>


          <div className={cx("HomePage__social-container HomePage__social-container--desktop self-end absolute")}>

            <SocialsModule
              soundLinkCTA={this.props.soundLinkCTA}
              instagramLinkCTA={this.props.instagramLinkCTA}
              twitterLinkCTA={this.props.twitterLinkCTA}
            />

          </div>

          <div className={cx("HomePage__social-container HomePage__social-container--mobile self-end absolute", { 'HomePage__social-container--mobile--show': this.state.navOpen === true }, { 'HomePage__social-container--mobile--hide': this.state.navOpen === false })}>

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
