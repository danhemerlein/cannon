import React, { Component } from "react";

import debounce from "utils/debounce";

import './HomePage.scss'
import cx from 'classnames';

import SocialsModule from 'components/SocialsModule';

export default class HomePage extends Component {

    setHeight = () => {
      const homePage = document.querySelector('.HomePage');

      const hpHeight = (window.innerHeight - 1);

      homePage.style.height = hpHeight + "px";
    }

    debounceAPHeight = () => {
      debounce(this.setHeight(), 100);
    }

    componentDidMount() {
      this.setHeight();

      window.addEventListener("resize", () => {
        this.setHeight();
      });
    }
    

    render() {
    return (
      <div className={cx("HomePage overflow-hidden w100")}>
        <div style={{ backgroundImage: "url('/assets/cannon.jpg')" }} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex items-center  justify-between flex-col relative")}>
        
          <div className={cx("mt2 relative")}>
            <h1 className={cx("HomePage__headline-one text-center headline-serif color-burnt-yellow bold")}>CANNON</h1>
          </div>

          <div className={cx("HomePage__headline-three--container mb2")}>
            <h3 className={cx("HomePage__headline-three text-center headline-serif color-burnt-yellow bold relative")}
            >WATER GLASS
            </h3>
            <h6 className={cx("text-center headline-serif color-burnt-yellow bold")}>out now</h6>
          </div>

          {/* <div></div>

          <div></div> */}

          {/* <div>
            <ul className={cx("HomePage__footer-nav mb2")}>
              <li className={cx("HomePage__footer-nav--list-item mx1 inline-block")}>
                <a href="https://distrokid.com/hyperfollow/cannon12/water-glass" target="_blank" rel="noopener noreferrer"><i class="fas fa-volume-up"></i></a>
              </li>

              <li className={cx("HomePage__footer-nav--list-item mx1 inline-block")}>
                <a href="https://www.instagram.com/cannonfew/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              </li>

              <li className={cx("HomePage__footer-nav--list-item mx1 inline-block")}>
                <a href="https://twitter.com/cannon_few" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div> */}

          <div className={cx("HomePage__social-container self-end absolute")}>

            <SocialsModule />

          </div>

        </div>

      </div>
    )
  }
}
