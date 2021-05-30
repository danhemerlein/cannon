import React, { Component } from 'react'
import GoHome from '../GoHome'
import './styles.scss'

export default class Videos extends Component {
  render() {
    const backgroundImage = {
      backgroundImage:
        'url(' + this.props.backgroundImage.fields.file.url + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
    return (
      <div
        className='Videos p1 relative flex items-center justify-center ocr'
        style={backgroundImage}
      >
        <GoHome />

        <div className='Videos__inner flex flex-wrap mt2'>
          <h1 className='Videos__h1 text-center mb1 w100'>
            Oxygen Music Video Out Now!
          </h1>

          <iframe
            className='Videos__iframe Videos__iframe--first col-12 pb1'
            title='Cannon - Oxygen (Official Music Video)'
            src='https://www.youtube.com/embed/EzLBtgcgJPk'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>

          <iframe
            className='Videos__iframe col-12 md:col-6 pb1 md:pr_5 md:pb_5'
            title='Cannon - These Walls (Official Lyric Video)'
            src='https://www.youtube.com/embed/wNESoi5Ty2Q'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>

          <iframe
            className='Videos__iframe col-12 md:col-6 pb1 md:pl_5 md:pb_5'
            title='Cannon - CONVERSATIONS (Official Video)'
            src='https://www.youtube.com/embed/k29hJ15hCrs'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>

          <iframe
            className='Videos__iframe col-12 md:col-6 pb1 md:pr_5 md:py_5'
            title='MEAL PREP / episode one: "breakfast"'
            src='https://www.youtube.com/embed/TYXzpE_t3bs'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>

          <iframe
            className='Videos__iframe col-12 md:col-6 pb1 md:pl_5 md:py_5'
            title='MEAL PREP / episode two: "lunch"'
            src='https://www.youtube.com/embed/Vlm7gUGJflU'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>

          <iframe
            className='Videos__iframe Videos__iframe--last col-12 md:col-6 pb1 md:pr_5 md:py_5'
            title='MEAL PREP / episode three: "dinner"'
            src='https://www.youtube.com/embed/lfwJn9srShg'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>

          <iframe
            className='Videos__iframe Videos__iframe--last col-12 md:col-6 md:pt_5 md:py_5 md:pl_5'
            title='parrot_v3 | visualizer'
            src='https://www.youtube.com/embed/5KytlTb0xwk'
            frameBorder='0'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen='allowfullscreen'
            mozallowfullscreen='mozallowfullscreen'
            msallowfullscreen='msallowfullscreen'
            oallowfullscreen='oallowfullscreen'
            webkitallowfullscreen='webkitallowfullscreen'
          ></iframe>
        </div>
      </div>
    )
  }
}
