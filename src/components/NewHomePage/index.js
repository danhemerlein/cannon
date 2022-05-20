import React, { Component } from "react"
import { Link } from "react-router-dom"
import NewSocialsModule from "../NewSocialsModule"
import "./styles.scss"
import MainLogo from "../MainLogo"

export default class NewHomePage extends Component {
  render() {
    return (
      <div className='NewHomePage flex justify-center items-center'>
        {/* <video
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
        ></video> */}

        <div className='NewHomePage__logo-container'>
          <MainLogo src='./assets/logo-black.png' />
        </div>

        <img
          src='./assets/may-2022-update.jpg'
          alt='fast forward icon'
          className='NewHomePage__hero-image col-10 md:col-6 lg:col-4'
        />

        <div className='NewHomePage__socials-container '>
          <NewSocialsModule />

          <ul className='NewHomePage__unordered-list flex flex-col'>
            {/* <li className='NewHomePage__list-item ocr'>
              <Link to='/merch'>merch</Link>
            </li> */}
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
