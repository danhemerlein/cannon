import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NewSocialsModule from '../NewSocialsModule'
import './styles.scss'

export default class NewHomePage extends Component {
  render() {
    return (
      <div className='NewHomePage'>
        <video
          autoPlay
          loop
          muted
          webkit-playsinline='true'
          playsInline
          src='./assets/loop_clip_mobile.mp4'
          className='NewHomePage__video block md:none'
        ></video>
        <video
          autoPlay
          loop
          muted
          webkit-playsinline='true'
          playsInline
          src='./assets/loop_clip_web.mp4'
          className='NewHomePage__video none md:block'
        ></video>

        <div className='NewHomePage__icons'>
          {/* <Link to='/music' className='flex items-center justify-center'>
            <img
              src='./assets/rewind-icon.png'
              alt='rewind icon'
              className='col-4'
            />
          </Link>

          <Link to='/bleu-tapes' className='flex items-center justify-center'>
            <img
              src='./assets/play-icon.png'
              alt='play icon'
              className='col-4'
            />
          </Link>

          <Link to='/one-of-three' className='flex items-center justify-center'>
            <img
              src='./assets/ff-icon.png'
              alt='fast forward icon'
              className='col-4'
            />
          </Link> */}

          <div className='flex flex-col w100 items-center'>
            <h1 className='NewHomePage__headline mb1'>
              <a
                href='https://onerpm.link/6639248105'
                target='_blank'
                rel='noreferrer'
              >
                pre save afterglows
              </a>
            </h1>
            <img
              src='./assets/afterglows-art.jpg'
              alt='fast forward icon'
              className='col-10 md:col-6 lg:col-4'
            />
          </div>
        </div>

        <div className='NewHomePage__socials-container'>
          <NewSocialsModule />
          <ul className='NewHomePage__unordered-list flex flex-col items-end'>
            <li className='NewHomePage__list-item ocr'>
              <Link to='/merch'>merch</Link>
            </li>
            <li className='NewHomePage__list-item ocr'>
              <a href='mailto:cannonsmgmt@gmail.com'>contact</a>
            </li>
            <li className='NewHomePage__list-item ocr'>
              <Link to='/videos'>videos</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
