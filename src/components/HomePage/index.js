import React, { Component } from "react";
import { Link } from "react-router-dom";

import debounce from "utils/debounce";

import './HomePage.scss'
import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';
import SocialToggle from 'components/SocialsToggle';

export default class HomePage extends Component {

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

  setHeightHP = () => {
    const homePage = document.querySelector('.HomePage');

    const hpHeight = (window.innerHeight);

    homePage.style.height = hpHeight + "px";
  }

  debounceHPHeight = () => {
    debounce(this.setHeightHP(), 100);
  }

  componentDidMount() {
    this.setHeightHP();
    window.addEventListener("resize", this.debounceHPHeight);

    const AveraSans = new FontFace('AveraSans', `url(${this.props.font.fields.file.url})`);

    AveraSans.load().then(function (loadedHand) {
      document.fonts.add(loadedHand);
      document.body.style.fontFamily = '"AveraSans", sans-serif';
    }).catch(function (error) {
      console.error('an error occured while loading the font');
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceHPHeight);
  }

  render() {      
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    return (
      <div className={cx("HomePage overflow-hidden w100")}>
        <div style={backgroundImage} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex flex-col relative")}>
        
          <div className={cx("HomePage__logo-container flex w100")}>
            <Link to="/">
              <img className={cx("")} src={this.props.logo.fields.file.url} alt=""/>
            </Link>
          </div>

          <Link to="/t-shirt">
          
            <div className={cx("HomePage__site-link absolute flex flex-col color-white")}>
              <h4 className={cx("relative headline-serif")}>Limited Edition</h4>

              <div className={cx("HomePage__site-link--desktop")}>
                <h4 className={cx("relative headline-serif")}>"These Walls" T-Shirt</h4>
              </div>

              <div className={cx("HomePage__site-link--mobile")}>

                <h4 className={cx("relative headline-serif")}>"These Walls"</h4>
                <h4 className={cx("relative headline-serif")}>T-Shirt</h4>
              </div>

            </div>

          </Link>

          <div className={cx("HomePage__headline-three--container col-12")}>

            <a href="https://open.spotify.com/track/3o2qklLlYRiHUYByBfoFl5?si=yeaTZeqOQI-q6qegdjMiLA" target="_blank" rel="noopener noreferrer">

              <h3 className={cx("HomePage__headline-three text-center headline-serif bold relative color-white")}
              >{this.props.footerTitle}
              </h3>
              <h6 className={cx("HomePage__headline-six text-center headline-serif color-white bold")}>{this.props.footerSubTitle}</h6>

            </a>

          </div>

          <div className={cx("HomePage__social-toggle absolute",
            { 'HomePage__social-toggle--nav-open': this.state.navOpen === true }, {'HomePage__social-toggle--nav-closed': this.state.navOpen === false }
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

          <div className={cx("HomePage__secondary-logo-container flex absolute")}>
            <img className={cx("")} src={this.props.secondaryLogo.fields.file.url} alt="" />
          </div>

        </div>

      </div>
    )
  }
}
