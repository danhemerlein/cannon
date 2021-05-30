import React, { Component } from 'react'
import GoHome from '../GoHome'
import './styles.scss'

export default class NewNewMusicPage extends Component {
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
        className='NewNewMusicPage w100 ocr p1 relative'
        style={backgroundImage}
      >
        <GoHome />

        <div className='NewNewMusicPage__inner h100 bg-cover flex flex-col relative mt2'>
          <div className='flex flex-wrap w100 '>
            <div className='NewNewMusicPage__project col-6 mb1'>
              <div className='w100 flex flex-col items-center justify-center md:pr_5'>
                <a
                  href='https://ffm.to/brokenmirrors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='./assets/broken-mirrors.jpg'
                    alt="'BROKEN MIRRORS' artwork"
                    className='w100'
                  />
                </a>
              </div>
            </div>

            <div className='NewNewMusicPage__project col-6 mb1 md:pl_5'>
              <div className='w100 flex flex-col items-center justify-center'>
                <a
                  href='https://ffm.to/cannonconversations'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='./assets/conversations.jpg'
                    alt="'CONVERSATIONS' artwork"
                    className='w100'
                  />
                </a>
              </div>
            </div>

            <div className='NewNewMusicPage__project col-6 mb1 md:pr_5'>
              <div className='w100 flex flex-col items-center justify-center'>
                <a
                  href='https://distrokid.com/hyperfollow/cannon2/these-walls'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='./assets/these-walls.jpg'
                    alt="'These Walls' artwork"
                    className='w100'
                  />
                </a>
              </div>
            </div>

            <div className='NewNewMusicPage__project col-6 mb1 md:pl_5'>
              <div className='w100 flex flex-col items-center justify-center'>
                <a
                  href='https://distrokid.com/hyperfollow/cannon12/water-glass'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='./assets/water-glass.jpg'
                    alt="'Water Glass' artwork"
                    className='w100'
                  />
                </a>
              </div>
            </div>

            <div className='NewNewMusicPage__project col-6 mauto'>
              <div className='w100 flex flex-col items-center justify-center'>
                <a
                  href='https://distrokid.com/hyperfollow/cannon2/stan-smiths'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='./assets/stan-smiths.jpg'
                    alt="'Stan Smiths' artwork"
                    className='w100'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
