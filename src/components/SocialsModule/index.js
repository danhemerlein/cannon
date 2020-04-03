import React, { Component } from "react";

import './SocialsModule.scss'
import cx from 'classnames';

export default class SocialsModule extends Component {

  render() {
    return (
      <div className={cx("SocialsModule h100")}>
        <ul
          className={cx(
            "SocialsModule__unordered-list flex flex-col justify-between col-12 items-center"
          )}
        >
          <li className={cx("SocialsModule__list-item mb_5")}>
            <a
              href="https://music.apple.com/us/album/these-walls-single/1472250194?app=itunes&ign-mpt=uo%3D4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-apple"></i>
            </a>
          </li>

          <li className={cx("SocialsModule__list-item mb_5")}>
            <a
              href="https://open.spotify.com/track/4P5d7lMNGqMPcVBn994Lbp?si=pMUT-nPHSX-DRDsYz54cuw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
          </li>

          <li className={cx("SocialsModule__list-item mb_5")}>
            <a
              href="https://soundcloud.com/user-912011581/waterglass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-soundcloud"></i>
            </a>
          </li>

          <li className={cx("SocialsModule__list-item mb_5")}>
            <a
              href="https://www.youtube.com/watch?v=CvCBDXDlSws&list=OLAK5uy_mDubMovuLaZSTSHPz05dU6kwpbKk7bSTo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>

          <li className={cx("SocialsModule__list-item mb_5")}>
            <a
              href="https://www.instagram.com/cannonfew/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>

          <li className={cx("SocialsModule__list-item mb_5")}>
            <a
              href="https://twitter.com/cannon_few"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>

          <li className={cx("SocialsModule__list-item mb2")}>
            <a
              href="https://www.facebook.com/cannonsmusic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
