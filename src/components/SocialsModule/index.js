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
              <a href="https://distrokid.com/hyperfollow/cannon12/water-glass" target="_blank" rel="noopener noreferrer"><i class="fas fa-volume-up"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-burnt-yellow")}>songs?</span>
            </li>

            <li className={cx("SocialsModule__nav--list-item mt1 relative flex")}>
              <a href="https://www.instagram.com/cannonfew/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-burnt-yellow")}>photos</span>
            </li>

            <li className={cx("SocialsModule__nav--list-item mt1 relative flex")}>
              <a href="https://twitter.com/cannon_few" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
              <span className={cx("SocialsModule__nav--list-item-cta absolute headline-serif color-burnt-yellow")}>thoughts</span>
            </li>
          </ul>
        </div>

    </div>
    )
  }
}
