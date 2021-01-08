import React, { Component } from "react";
import NewSocialsModule from 'components/NewSocialsModule';

import { Link } from "react-router-dom";

import './styles.scss'

export default class HomePage extends Component {

  render() {
    return (
      <div className="NewHomePage">

        <div className="NewHomePage__nav">
           <ul className="flex">
              <li className="droid mx_5">
                <Link to="/">home</Link>
              </li>
              <li className="droid mx_5">
                <Link to="/merch">merch</Link>
              </li>
              <li className="droid mx_5">
                <a href="mailto:cannonsmgmt@gmail.com">contact</a>
              </li>
              <li className="droid mx_5">
                <Link to="/videos">videos</Link>
              </li>

            </ul>
        </div>

        <video autoPlay loop muted webkit-playsinline="true" playsInLine src="./assets/loop_clip_mobile.mp4" className="NewHomePage__video block md:none"></video>
        <video autoPlay loop muted webkit-playsinline="true" playsInLine src="./assets/loop_clip_web.mp4" className="NewHomePage__video none md:block"></video>

        <div className="NewHomePage__socials-container">
          <NewSocialsModule />
        </div>


      </div>
    );
  }
}
