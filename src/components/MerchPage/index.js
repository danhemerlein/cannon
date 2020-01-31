import React, { Component } from "react";

import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';
import SocialToggle from 'components/SocialsToggle';
import MainLogo from 'components/MainLogo';
import SecondaryLogo from 'components/SecondaryLogo';

import './MerchPage.scss'

export default class MerchPage extends Component {

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
  };

  render() {
    return (
      <div className="MerchPage w100">
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
              "MerchPage__merch col-12  md:col-10 px1 md:px0 flex items-center justify-center flex-col"
            )}
          >
            <div
              className={cx(
                "MerchPage__merch-headline--container flex items-center justify-center flex-col w100"
              )}
            >
              <h4
                className={cx(
                  "MerchPage__merch-headline headline-serif color-white col-12 md:col-8"
                )}
              >
                “Words Are Important”<br></br> Long-Sleeve Tee
              </h4>

              <h4
                className={cx(
                  "MerchPage__merch-headline headline-serif color-white underline col-12 md:col-8 pb2"
                )}
              >
                <a href="mailto:luke@overeasyusa.com">email to order</a>
                {/* <a href="#">email to order</a> */}
                {/* <p>sold out</p> */}
              </h4>

              <div className={cx("col-12 md:col-8")}>
                <h4
                  className={cx(
                    "MerchPage__merch-headline headline-serif color-white pb2"
                  )}
                >
                  To complete the order, please include in your email:{" "}
                </h4>

                <ul
                  className={cx(
                    "MerchPage__merch-headline MerchPage__merch-unordered-list headline-serif color-white pb2"
                  )}
                >
                  <li className={cx("text-left w100 ml2 py_5 md:py0")}>
                    Size and quantity of shirts (S, M, L, XL)
                  </li>
                  <li className={cx("text-left w100 ml2 md:py0")}>
                    Your shipping address
                  </li>
                  <li className={cx("text-left w100 ml2 md:py0")}>
                    Venmo Luke Doyle (@overeasymusic) total amount of order
                    ($25/shirt + $5 shipping)
                  </li>
                  <li className={cx("text-left w100 ml2 md:py0")}>
                    Upon receipt, order will be shipped in 3-5 business days
                    (email confirmation)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={cx(
              "MerchPage__merch-photo-container col-12 px1 md:px2 flex justify-center items-center mb8 flex-col"
            )}
          >
            <div
              className={cx(
                "MerchPage__merch-photo bg-color-white col-6 md:col-4 mr0 mb1 relative"
              )}
            >
              <img
                className={cx("col-12")}
                src={this.props.merchPrimary.fields.file.url}
                alt=""
              />
              <p className="MerchPage__merch-photo-paragraph text-center color-black pb_5">
                front
              </p>

              {/* <div className="MerchPage__sold-out-message-two headline-serif color-white absolute px1 py_5 md:px2 md:py1">
                sold out
              </div> */}
            </div>

            <div
              className={cx(
                "MerchPage__merch-photo MerchPage__merch-photo--back bg-color-white col-6 md:col-4 ml0 relative"
              )}
            >
              <img
                className={cx("col-12")}
                src={this.props.merchSecondary.fields.file.url}
                alt=""
              />

              <p className="MerchPage__merch-photo-paragraph text-center color-black pb_5">
                back
              </p>

              {/* <div className="MerchPage__sold-out-message-two headline-serif color-white absolute px1 py_5 md:px2 md:py1">
                sold out
              </div> */}
            </div>
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
              "HomePage__social-container HomePage__social-container--mobile self-end absolute",
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

          {/* <div className="MerchPage__sold-out-message headline-serif color-white absolute px2 py1">
            sold out
          </div> */}
        </div>
      </div>
    );
  }
}
