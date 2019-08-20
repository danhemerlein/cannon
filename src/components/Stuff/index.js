import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';
import SocialToggle from 'components/SocialsToggle';
import MainLogo from 'components/MainLogo';
import SecondaryLogo from 'components/SecondaryLogo';

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

  componentDidMount() {

    window.addEventListener("resize", this.debounceStuffHeight);

    const AveraSans = new FontFace('AveraSans', `url(${this.props.font.fields.file.url})`);

    AveraSans.load().then(function (loadedHand) {
      document.fonts.add(loadedHand);
      document.body.style.fontFamily = '"AveraSans", sans-serif';
    }).catch(function (error) {
      console.error('an error occured while loading the font');
    });
  };

  render() {
    return (
      <div className="Stuff w100">

        <div className={cx("Stuff__bg bg-color-black h100 bg-cover flex flex-col relative justify-center items-center")}>

          <div className="flex w100 justify-between p1 md:p2">

            <MainLogo
              src={this.props.logo.fields.file.url}>
            </MainLogo>
  
            <div className={cx("Stuff__site-link")}>
              <Link to="/">
                <h4 className={cx("headline-serif")}>home</h4>
              </Link>

            </div>

          </div>

          <div className={cx("Stuff__merch col-8 md:col-10 px1 md:px2 flex items-center justify-center flex-col")}>

            <div className={cx("Stuff__merch-headline--container flex items-center justify-center flex-col w100")}>
            
              <h4 className={cx("Stuff__merch-headline headline-serif color-white col-12 md:col-8 px2")}>Limited Edition "These Walls" T-Shirt</h4>

              <h4 className={cx("Stuff__merch-headline headline-serif color-white underline col-12 md:col-8 pb2 px2")}>
                <a href="mailto:luke@overeasyusa.com">email to order</a>
              </h4>

              <div className={cx("col-12 md:col-8")}>

                <h4 className={cx("Stuff__merch-headline headline-serif color-white pb2 px2")}>To complete the order, please include in your email: </h4>

                <ul className={cx("Stuff__merch-headline headline-serif color-white pb2 px2")}> 
                  <li className={cx("text-left w100 ml2")}>
                    Size and quantity of shirts (S, M, L)
                  </li>
                  <li className={cx("text-left w100 ml2")}>
                    Your shipping address
                  </li>
                  <li className={cx("text-left w100 ml2")}>
                    Venmo (@ldoyle98) total amount of order ($20/shirt + $10 shipping)
                  </li>
                  <li className={cx("text-left w100 ml2")}>
                    Upon receipt, order will be shipped in 3-5 business days (email confirmation)
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <div className={cx("col-12 px1 md:px2 flex justify-center items-center mb8 flex-col md:flex-row")}>

            <div className={cx("Stuff__merch-photo bg-color-white col-8 md:col-4 mr0 md:mr1 mb1 md:mb0")}>
              <img className={cx("col-12")} src={this.props.merchPrimary.fields.file.url} alt="" />
              <p className="Stuff__merch-photo--paragraph-front text-center color-black pb_5">front</p>
            </div>

            <div className={cx("Stuff__merch-photo Stuff__merch-photo--back bg-color-white col-8 md:col-4 ml0 md:ml1")}>
              <img className={cx("col-12")} src={this.props.merchSecondary.fields.file.url} alt="" />
              <p className="Stuff__merch-photo--paragraph-back text-center color-black pb_5">back</p>
            </div>
            
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

          <SecondaryLogo
            src={this.props.secondaryLogo.fields.file.url}
          ></SecondaryLogo>

        </div>
      </div>
    )
  }
}
