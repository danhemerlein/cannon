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
        <div style={backgroundImage} className={cx("HomePage__image1 h100 flex flex-col relative")}>

          <div className="flex w100 justify-end p1 md:p2 flex-col items-end">

            <MainLogo
              src={this.props.logo.fields.file.url}>
            </MainLogo>

            <h1 className="HomePage__headline-one color-white futura text-center md:text-left mt2 md:mt0">
              <a href="https://open.spotify.com/track/3aV6llTW0aRg0Db852uaC7?si=Nf6cDEH4Rfu5HnydVsWIUQ" target="_blank" rel="noopener noreferrer">
                "STAN SMITHS" OUT NOW
              </a>
            </h1>

            {/* <div className="HomePage__site-link">

              <Link to="/t-shirt">
              
                <div className={cx("HomePage__site-link flex flex-col color-white")}>
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

            </div> */}

          </div>

          {/* <div className={cx("HomePage__headline-center-container flex justify-center flex-col text-center mt8 mb4 p1 md:p2")}>
            <h3 className={cx("HomePage__headline-three headline-serif bold color-white inline-block")}>  
              <a href="https://open.spotify.com/track/3o2qklLlYRiHUYByBfoFl5?si=yeaTZeqOQI-q6qegdjMiLA" target="_blank" rel="noopener noreferrer">
                {this.props.footerTitle}
              </a>
            </h3>

            <h6 className={cx("HomePage__headline-six headline-serif color-white bold inline-block")}>
              <a href="https://open.spotify.com/track/3o2qklLlYRiHUYByBfoFl5?si=yeaTZeqOQI-q6qegdjMiLA" target="_blank" rel="noopener noreferrer">
                Lyric Video Out Now
              </a>
            </h6>
          </div> */}

          {/* <div className="HomePage__container-iframe w100 flex justify-center">

            <iframe className="col-12 p1 md:p2 mb8" title="These Walls Lyric Video" src="https://www.youtube.com/embed/wNESoi5Ty2Q" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"></iframe>

          </div> */}

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

          <div className={cx("HomePage__social-container HomePage__social-container--mobile self-end absolute flex-col", { 'HomePage__social-container--mobile--show': this.state.navOpen === true }, { 'HomePage__social-container--mobile--hide': this.state.navOpen === false })}>

       
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
