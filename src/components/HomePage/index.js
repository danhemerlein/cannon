import React, { Component } from "react";

import './HomePage.scss'
import cx from 'classnames';

import WaterGlass from "components/Icons/WaterGlass";

export default class HomePage extends Component {

    constructor(props) {
      super(props)    
      this.glass1 = React.createRef();

      this.state = {
        
      }
    }

    mouseEnter() {
      const children = document.querySelectorAll('.HomePage__svg-container'); 
      
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      for (let child of children) {

        const x = getRandomInt(-600, 600);
        const y = getRandomInt(-600, 600);
        const deg = getRandomInt(-100, 100);

        child.style.transform = `translateY(${x}%) translateX(${y}%) rotate(${deg}deg)`;
      }
    }
    
    mouseLeave() {      
      const children = document.querySelectorAll('.HomePage__svg-container'); 

      for (let child of children) {
        child.style.transform = `translateY(-50%) translateX(-50%)`;
      }
    }

    render() {
    return (
      <div className={cx("HomePage overflow-hidden w100 vh100")}>
        <div style={{ backgroundImage: "url('/assets/cannon.jpg')" }} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex items-center  justify-between flex-col relative")}>
        
          <div className={cx("mt2 relative")}>
            <h1 className={cx("HomePage__headline-one text-center headline-serif color-burnt-yellow bold")}>CANNON</h1>
          </div>

          <div className={cx("HomePage__headline-three--container ")}>
            <h3 className={cx("HomePage__headline-three text-center headline-serif color-burnt-yellow bold relative")}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            >WATER GLASS

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
            </h3>
            <h6 className={cx("text-center headline-serif color-burnt-yellow bold")}>out now</h6>
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
