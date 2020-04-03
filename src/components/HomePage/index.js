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

    // const AveraSans = new FontFace('AveraSans', `url(${this.props.font.fields.file.url})`);

    // AveraSans.load().then(function (loadedHand) {
    //   document.fonts.add(loadedHand);
    //   document.body.style.fontFamily = '"AveraSans", sans-serif';
    // }).catch(function (error) {
    //   console.error('an error occured while loading the font');
    // });
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    const heroImage = {
      backgroundImage: "url(" + this.props.heroImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div className={cx("HomePage w100")}>
        <div
          style={backgroundImage}
          className={cx("HomePage__image1 h100 flex flex-col relative")}
        >
          <div className="flex w100 p1 md:p2 flex-col">
            <ul className="HomePage__unoderded-list flex mb1">
              <li className="HomePage__list-item droid md:mr2">
                <Link to="/">HOME</Link>
              </li>
              <li className="HomePage__list-item droid md:mx2">
                <Link to="/merch">MERCH</Link>
              </li>
              {/* <li className="HomePage__list-item  mx2">
                <Link to="/">MUSIC</Link>
              </li> */}
              <li className="HomePage__list-item droid  md:mx2">
                <a href="mailto:cannonsmgmt@gmail.com">CONTACT</a>
              </li>

              <li className="HomePage__list-item droid   block md:none">
                <button className="droid" onClick={this.toggleNav}>
                  SOCIALS
                </button>
              </li>
            </ul>

            <div className="col-12 relative">
              <div className="content col-12 md:col-11">
                <div style={heroImage} className="two-one"></div>
                {/* <div style={heroImage} className="block md:nonde md:three-four"></div> */}
              </div>

              <div
                className={cx(
                  "HomePage__social-container HomePage__social-container--desktop absolute h100 col-1 none md:block"
                )}
              >
                <SocialsModule />
              </div>
            </div>
          </div>

          {/* <div
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
          </div> */}

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
            <SocialsModule />
          </div>

          <div className="HomePage__cta-container  absolute  flex  justify-center items-center">
            <img src={this.props.convoImage.fields.file.url} alt="" />

            <h3 className="text-center  ml1  droid">
              <a
                href="http://open.spotify.com/album/5TpsyMR0a4roN9z5g4veZ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONVERSATIONS<br></br>OUT EVERYWHERE!
              </a>
            </h3>
          </div>

          <SecondaryLogo
            src={this.props.secondaryLogo.fields.file.url}
          ></SecondaryLogo>
        </div>
      </div>
    );
  }
}
