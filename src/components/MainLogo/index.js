import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./MainLogo.scss"

export default class MainLogo extends Component {
  render() {
    return (
      <div className='MainLogo flex w100 col-3 md:col-1'>
        <Link to='/'>
          <img className='w100' src={this.props.src} alt='Cannon' />
        </Link>
      </div>
    )
  }
}
