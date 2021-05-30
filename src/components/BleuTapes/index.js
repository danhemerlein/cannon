import React from 'react'
import GoHome from '../GoHome'
import './styles.scss'

const BleuTapes = (props) => {
  const backgroundImage = {
    backgroundImage: "url('/assets/bleu-tapes.png')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  const backgroundImageInner = {
    backgroundImage: "url('/assets/bleu-tracks.png')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const mobileBackgroundImage = {
    backgroundImage: "url('/assets/bleu-tapes-mobile.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <a
      href='https://open.spotify.com/album/0p6BK5gxpxydQPG5HsyOIl?si=WUH1JklSRBmXB7x3AgZdKQ'
      target='_blank'
      rel='noopener noreferrer'
    >
      <GoHome />

      <div
        className='BleuTapes block lg:none'
        style={mobileBackgroundImage}
      ></div>

      <div className='BleuTapes p1 none lg:block' style={backgroundImage}>
        <div className='h100 none lg:block' style={backgroundImageInner}></div>
      </div>
    </a>
  )
}
export default BleuTapes
