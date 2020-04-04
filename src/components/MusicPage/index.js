import React, { Component } from "react";

import cx from "classnames";

import MainLogo from "components/MainLogo";
import SocialsModule from "components/SocialsModule";
import SocialToggle from "components/SocialsToggle";
import NavOverlay from "components/NavOverlay";

import debounce from "utils/debounce";
import "./MusicPage.scss";

export default class MusicPage extends Component {
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

  setHeight = () => {
    const musicPage = document.querySelector(".MusicPage");

    const nfHeight = window.innerHeight;

    musicPage.style.height = nfHeight + "px";
  };

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  };

  // componentDidMount() {
  //   this.setHeight();

  //   window.addEventListener("resize", () => {
  //     this.setHeight();
  //   });
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.setHeight);
  // }

  render() {
    return (
      <div className="MerchPage w100 droid">
        <NavOverlay
          navOpen={this.state.navOpen}
          clickHandler={this.toggleNav}
        />
        <div
          className={cx(
            "bg-color-black h100 bg-cover flex flex-col relative justify-center items-center"
          )}
        >
          <div className="MerchPage__main-logo-container flex w100 p1 md:p2">
            <MainLogo src={this.props.logo.fields.file.url}></MainLogo>
          </div>

          <div
            className={cx(
              "HomePage__social-toggle absolute",
              {
                "HomePage__social-toggle--nav-open":
                  this.state.navOpen === true,
              },
              {
                "HomePage__social-toggle--nav-closed":
                  this.state.navOpen === false,
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
              "HomePage__social-container HomePage__social-container--mobile self-end absolute",
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

        </div>
      </div>
    );
  }
}
