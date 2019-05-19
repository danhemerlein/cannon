import React, { Component } from "react";

import './SocialsModule.scss'
import cx from 'classnames';

export default class SocialsModule extends Component {

  render() {
    return (
      <div className={cx("SocialsModule flex justify-end overflow-hidden w100")}>

        <div>
          <ul className={cx("SocialsModule__nav")}>
            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://itunes.apple.com/us/album/water-glass-single/1454131803?ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer"><i class="fab fa-apple"></i></a>
              {/* <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.soundLinkCTA}</span> */}
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://open.spotify.com/track/4P5d7lMNGqMPcVBn994Lbp?si=pMUT-nPHSX-DRDsYz54cuw" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
              {/* <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.soundLinkCTA}</span> */}
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://soundcloud.com/user-912011581/waterglass" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud"></i></a>
              {/* <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.soundLinkCTA}</span> */}
            </li>

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://www.youtube.com/watch?v=CvCBDXDlSws&list=OLAK5uy_mDubMovuLaZSTSHPz05dU6kwpbKk7bSTo" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
              {/* <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.soundLinkCTA}</span> */}
            </li>

            {/* <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://distrokid.com/hyperfollow/cannon12/water-glass" target="_blank" rel="noopener noreferrer"><i className="fas fa-volume-up"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.soundLinkCTA}</span>
            </li> */}

            <li className={cx("SocialsModule__nav--list-item mb1 relative flex")}>
              <a href="https://www.instagram.com/cannonfew/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.instagramLinkCTA}</span>
            </li>

            <li className={cx("SocialsModule__nav--list-item relative flex")}>
              <a href="https://twitter.com/cannon_few" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-black")}>{this.props.twitterLinkCTA}</span>
            </li>
          </ul>
        </div>

    </div>
    )
  }
}
