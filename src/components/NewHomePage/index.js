import React, { Component } from "react";
import NewSocialsModule from 'components/NewSocialsModule';

import { Link } from "react-router-dom";

import './styles.scss'

export default class NewHomePage extends Component {

  render() {
    return (
      <div className="NewHomePage">

        <video autoPlay loop muted webkit-playsinline="true" playsInline src="./assets/loop_clip_mobile.mp4" className="NewHomePage__video block md:none"></video>
        <video autoPlay loop muted webkit-playsinline="true" playsInline src="./assets/loop_clip_web.mp4" className="NewHomePage__video none md:block"></video>

        <div className="NewHomePage__icons">
          <Link to="/music">
            <span role="img" aria-label="rewind">
              ⏪
            </span>
          </Link>

          <Link to="/bleu-tapes">
            <span role="img" aria-label="play">
              ⏯
            </span>
          </Link>

          <Link to="/one-of-three">
            <span role="img" aria-label="fast forward">
              ⏩
            </span>
          </Link>

        </div>

        <div className="NewHomePage__socials-container">
          <NewSocialsModule />
          <ul className="NewHomePage__unordered-list flex flex-col items-end">
            <li className="NewHomePage__list-item droid">
              <Link to="/merch">merch</Link>
            </li>
            <li className="NewHomePage__list-item droid">
              <a href="mailto:cannonsmgmt@gmail.com">contact</a>
            </li>
            <li className="NewHomePage__list-item droid">
              <Link to="/videos">videos</Link>
            </li>

          </ul>
        </div>


      </div>
    );
  }
}
