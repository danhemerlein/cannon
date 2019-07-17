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

  // setHeightStuffMerch = () => {
  //   const stuffMerch = document.querySelector('.Stuff__merch');
  //   const header = document.querySelector('.Stuff__logo-container');
  //   const footer = document.querySelector('.Stuff__headline-three--container');

  //   const windowHeight = (window.innerHeight);

  //   const combined = windowHeight - header.offsetHeight - footer.offsetHeight - footer.offsetHeight;

  //   stuffMerch.style.height = combined + "px";

  //   console.log(windowHeight);
  //   console.log(header.offsetHeight);
  //   console.log(footer.offsetHeight);
  //   console.log(windowHeight - header.offsetHeight - footer.offsetHeight);
    
  // }

  debounceStuffHeight = () => {
    debounce(this.setHeightStuff(), 100);
    // debounce(this.setHeightStuffMerch(), 100);
  }

  componentDidMount() {
    this.setHeightStuff();
    // this.setHeightStuffMerch();

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

          <div className={cx("Stuff__merch w100 p2 absolute flex items-center justify-center flex-col")}>

            <div className={cx("w100 flex items-center justify-center flex-col")}>
              <h4 className={cx("Stuff__merch-headline headline-serif color-white col-12 md:col-6 pt2 px2")}>Limited Edition "These Walls" T-Shirt</h4>
              <h4 className={cx("Stuff__merch-headline headline-serif color-white underline col-12 md:col-6 pb2 px2")}>
                <a href="mailto:luke@overeasyusa.com">email to order</a>
              </h4>
            </div>

            <div className={cx("flex items-center justify-center flex-col md:flex-row")}>

              <div className={cx("Stuff__merch-photo")}>
                <img className={cx("")} src={this.props.merchPrimary.fields.file.url} alt="" />
                <p className="Stuff__merch-photo--paragraph-front text-center color-white">front</p>
              </div>

              <div className={cx("Stuff__merch-photo Stuff__merch-photo--back")}>
                <img className={cx("")} src={this.props.merchSecondary.fields.file.url} alt="" />
                <p className="Stuff__merch-photo--paragraph-back text-center color-white">back</p>
              </div>

            </div>

          </div>

          <div className={cx("Stuff__headline-three--container absolute none md:block")}>

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
