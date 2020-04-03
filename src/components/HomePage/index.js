import React, { Component } from "react";
import { Link } from "react-router-dom";

import './HomePage.scss'
import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';
import SocialToggle from 'components/SocialsToggle';
import MainLogo from 'components/MainLogo';
import SecondaryLogo from 'components/SecondaryLogo';

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

  closeNav = () => {
    if (this.state.navOpen) {
      this.setState({
        navOpen: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.closeNav);

    const AveraSans = new FontFace('AveraSans', `url(${this.props.font.fields.file.url})`);

    AveraSans.load().then(function (loadedHand) {
      document.fonts.add(loadedHand);
      document.body.style.fontFamily = '"AveraSans", sans-serif';
    }).catch(function (error) {
      console.error('an error occured while loading the font');
    });
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <div className={cx("HomePage w100")}>
        <div
          style={backgroundImage}
          className={cx("HomePage__image1 h100 flex flex-col relative")}
        >
          <div className="flex w100 justify-end p1 md:p2 flex-col items-end">
            {/* <MainLogo src={this.props.logo.fields.file.url}></MainLogo> */}

            {/* <h1 className="HomePage__headline-one color-white futura mt2 md:mt0 text-center sm:text-right underline">
              <Link to="/merch">
                “Words Are Important” <br></br>Long-Sleeve Tee<br></br>available now
              </Link>
            </h1>   */}
          </div>

          <div
            className={cx(
              "HomePage__social-toggle absolute",
              {
                "HomePage__social-toggle--nav-open": this.state.navOpen === true
              },
              {
                "HomePage__social-toggle--nav-closed":
                  this.state.navOpen === false
              }
            )}
          >
            <SocialToggle
              clickHandler={this.toggleNav}
              navOpen={this.state.navOpen}
            ></SocialToggle>
          </div>

          <div
            className={cx(
              "HomePage__social-container HomePage__social-container--desktop self-end absolute"
            )}
          >
            <SocialsModule
              soundLinkCTA={this.props.soundLinkCTA}
              instagramLinkCTA={this.props.instagramLinkCTA}
              twitterLinkCTA={this.props.twitterLinkCTA}
            />
          </div>

          <div
            className={cx(
              "HomePage__social-container HomePage__social-container--mobile self-end absolute flex-col",
              {
                "HomePage__social-container--mobile--show":
                  this.state.navOpen === true
              },
              {
                "HomePage__social-container--mobile--hide":
                  this.state.navOpen === false
              }
            )}
          >
            <SocialsModule
              soundLinkCTA={this.props.soundLinkCTA}
              instagramLinkCTA={this.props.instagramLinkCTA}
              twitterLinkCTA={this.props.twitterLinkCTA}
            />
          </div>

          <SecondaryLogo
            src={this.props.secondaryLogo.fields.file.url}
          ></SecondaryLogo>
        </div>
      </div>
    );
  }
}
