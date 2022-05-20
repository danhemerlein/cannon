import React, { Component } from "react"

import "./styles.scss"

export default class NewSocialsModule extends Component {
  render() {
    return (
      <div className='NewSocialsModule h100'>
        <ul className='flex col-3'>
          <li className='mr_5'>
            <a
              href='https://music.apple.com/us/artist/cannon/2737218'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-apple'></i>
            </a>
          </li>

          <li className='mx_5'>
            <a
              href='https://open.spotify.com/artist/34C7mFxOBFOS9pnWBaK54D?si=Fh5XhPnTSy-ssOb7kp5VpA&nd=1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-spotify'></i>
            </a>
          </li>

          <li className='mx_5'>
            <a
              href='https://soundcloud.com/cannonfew'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-soundcloud'></i>
            </a>
          </li>

          <li className='mx_5'>
            <a
              href='https://www.youtube.com/c/cannonfew'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-youtube'></i>
            </a>
          </li>

          <li className='mx_5'>
            <a
              href='https://www.instagram.com/cannonfew/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>

          <li className='mx_5'>
            <a
              href='https://twitter.com/cannon_few'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>

          <li className='ml_5'>
            <a
              href='https://www.facebook.com/cannonsmusic/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
