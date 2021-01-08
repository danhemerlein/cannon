import React, { Component } from "react";

import './styles.scss'


export default class NewSocialsModule extends Component {

  render() {
    return (
      <div className="NewSocialsModule h100">
        <ul className="flex col-3">
          <li className="mr_5">
            <a
              href="https://music.apple.com/us/album/conversations/1504146513?i=1504146698"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-apple"></i>
            </a>
          </li>

          <li className="mx_5">
            <a
              href="http://open.spotify.com/album/5TpsyMR0a4roN9z5g4veZ7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
          </li>

          <li className="mx_5">
            <a
              href="https://soundcloud.com/user-912011581/waterglass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-soundcloud"></i>
            </a>
          </li>

          <li className="mx_5">
            <a
              href="https://www.youtube.com/watch?v=CvCBDXDlSws&list=OLAK5uy_mDubMovuLaZSTSHPz05dU6kwpbKk7bSTo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>

          <li className="mx_5">
            <a
              href="https://www.instagram.com/cannonfew/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>

          <li className="mx_5">
            <a
              href="https://twitter.com/cannon_few"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>

          <li className="ml_5">
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
