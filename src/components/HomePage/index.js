import React, { Component } from "react";

import './HomePage.scss'
import cx from 'classnames';

import WaterGlass from "components/Icons/WaterGlass";

export default class HomePage extends Component {

    render() {
    return (
      <div className={cx("HomePage overflow-hidden w100 vh100")}>
        <div style={{ backgroundImage: "url('/assets/cannon.jpg')" }} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex items-center  justify-between flex-col relative")}>
        
          <div className={cx("mt2 relative")}>
            <h1 className={cx("HomePage__headline-one text-center headline-serif color-burnt-yellow bold")}>CANNON</h1>
          </div>

          <div className={cx("HomePage__headline-three--container relative")}>
            <h3 className={cx("HomePage__headline-three text-center headline-serif color-burnt-yellow bold")}>WATER GLASS</h3>

            <div id="glass-1" className={cx("HomePage__svg-container absolute")}>
              <WaterGlass></WaterGlass>
            </div>

            <div id="glass-2" className={cx("HomePage__svg-container absolute")}>
              <WaterGlass></WaterGlass>
            </div>

            <div id="glass-3" className={cx("HomePage__svg-container absolute")}>
              <WaterGlass></WaterGlass>
            </div>

            <div id="glass-4" className={cx("HomePage__svg-container absolute")}>
              <WaterGlass></WaterGlass>
            </div>

            <div id="glass-5" className={cx("HomePage__svg-container absolute")}>
              <WaterGlass></WaterGlass>
            </div>
            
          </div>

          <div></div>

          <div>
            <ul className={cx("HomePage__footer-nav mb2")}>
              <li className={cx("HomePage__footer-nav--list-item mx1 color-burnt-yellow inline-block")}>
                <a href="https://distrokid.com/hyperfollow/cannon12/water-glass" target="_blank" rel="noopener noreferrer">LISTEN</a>
              </li>

              <li className={cx("HomePage__footer-nav--list-item mx1 color-burnt-yellow inline-block")}>
                <a href="https://www.instagram.com/cannonfew/" target="_blank" rel="noopener noreferrer">INSTA</a>
              </li>

              <li className={cx("HomePage__footer-nav--list-item mx1 color-burnt-yellow inline-block")}>
                <a href="https://twitter.com/cannon_few" target="_blank" rel="noopener noreferrer">TWITTER</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
