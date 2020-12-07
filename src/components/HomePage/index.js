import React, { Component } from "react";
import { Link } from "react-router-dom";

import './HomePage.scss'
import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';
import SocialToggle from 'components/SocialsToggle';
import MainLogo from 'components/MainLogo';
import SecondaryLogo from 'components/SecondaryLogo';
import NavOverlay from 'components/NavOverlay';

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
        <NavOverlay
          navOpen={this.state.navOpen}
          clickHandler={this.toggleNav}
        />
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
              <li className="HomePage__list-item droid md:mx2">
                <Link to="/music">MUSIC</Link>
              </li>
              <li className="HomePage__list-item droid md:mx2">
                <a href="mailto:cannonsmgmt@gmail.com">CONTACT</a>
              </li>

              <li className="HomePage__list-item block md:none">
                <a href="#" className="droid" onClick={this.toggleNav}>
                  SOCIALS
                </a>
              </li>
            </ul>

            <div className="col-12 relative">
              <div className="content col-12 md:col-3">
               <a
                href="https://open.spotify.com/album/0p6BK5gxpxydQPG5HsyOIl?si=U1v8uhtgSPiNvg4JLEZPHQ"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <div style={heroImage} className="one-one"></div>
                </a>
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

          <div
            className={cx(
              "HomePage__social-container HomePage__social-container--mobile self-end absolute flex-col",
              {
                "HomePage__social-container--mobile--show":
                  this.state.navOpen === true,
              },
              {
                "HomePage__social-container--mobile--hide":
                  this.state.navOpen === false,
              }
            )}
          >
            <SocialsModule />
          </div>

          <div className="HomePage__cta-container  absolute  flex  justify-center items-center">
            <a
              href="https://open.spotify.com/album/0p6BK5gxpxydQPG5HsyOIl?si=U1v8uhtgSPiNvg4JLEZPHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-center  ml1  droid">
                bleu tapes<br></br>out now
              </h3>
            </a>
          </div>

          <SecondaryLogo
            src={this.props.secondaryLogo.fields.file.url}
          ></SecondaryLogo>
        </div>
      </div>
    );
  }
}
