import React, { Component } from "react";

import './SocialsModule.scss'
import cx from 'classnames';

import WaterGlass from 'components/Icons/WaterGlass';


export default class SocialsModule extends Component {

  render() {
    return (
      <div className={cx("SocialsModule overflow-hidden w100")}>

        <div>
          <ul className={cx("SocialsModule__nav")}>
            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://music.apple.com/us/album/these-walls-single/1472250194?app=itunes&ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer"><i className="fab color-white fa-apple"></i></a>
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://open.spotify.com/track/4P5d7lMNGqMPcVBn994Lbp?si=pMUT-nPHSX-DRDsYz54cuw" target="_blank" rel="noopener noreferrer"><i className="fab color-white fa-spotify"></i></a>
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://soundcloud.com/user-912011581/waterglass" target="_blank" rel="noopener noreferrer"><i className="fab color-white fa-soundcloud"></i></a>
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://www.youtube.com/watch?v=CvCBDXDlSws&list=OLAK5uy_mDubMovuLaZSTSHPz05dU6kwpbKk7bSTo" target="_blank" rel="noopener noreferrer"><i className="fab color-white fa-youtube"></i></a>
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://www.instagram.com/cannonfew/" target="_blank" rel="noopener noreferrer"><i className="fab color-white fa-instagram"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-white")}>{this.props.instagramLinkCTA}</span>
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://twitter.com/cannon_few" target="_blank" rel="noopener noreferrer"><i className="fab color-white fa-twitter"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-white")}>{this.props.twitterLinkCTA}</span>
            </li>

            <li className={cx("SocialsModule__nav--list-item SocialsModule__nav--list-item-svg flex relative")}>
              <a href="https://open.spotify.com/track/4P5d7lMNGqMPcVBn994Lbp?si=lxlB9FUqRHupxW7IGDSzgQ" target="_blank" rel="noopener noreferrer" className="block"><WaterGlass></WaterGlass></a>
            </li>

            <li className={cx("text-center")}>
              <a href="https://open.spotify.com/track/4P5d7lMNGqMPcVBn994Lbp?si=lxlB9FUqRHupxW7IGDSzgQ" target="_blank" rel="noopener noreferrer" className="SocialsModule__nav--list-item-svg-cta color-white">Water Glass<br></br> out now</a>
            </li>

          </ul>
        </div>

    </div>
    )
  }
}
