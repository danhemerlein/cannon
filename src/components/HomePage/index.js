import React, { Component } from "react";

import './HomePage.scss'
import cx from 'classnames';

import RainCloud from "components/Icons/RainCloud";
import Storm from "components/Icons/Storm";
import HeavyStorm from "components/Icons/HeavyStorm";
import CloudOne from "components/Icons/CloudOne";
import CloudTwo from "components/Icons/CloudTwo";
import CloudThree from "components/Icons/CloudThree";


export default class HomePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      icons: [1, 2, 3],
      acvtiveIcon: 1,
    }
  }
  
componentDidMount = () => {
  var activeIcon = setInterval(this.timer, 600);
}

timer = () => {
  // setState method is used to update the state

  setTimeout(() => {
    this.setState({ activeIcon: 1 });
  }, 200);

  setTimeout(() => {
    this.setState({ activeIcon: 2 });  
  }, 400);

  setTimeout(() => {
    this.setState({ activeIcon: 3 });
  }, 600);

}
  
  render() {
    return (
      <div className={cx("HomePage overflow-hidden w100 vh100 ")}>

        <div style={{ backgroundImage: "url('/assets/cannon.jpg')" }} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex justify-between")}>

          <div className={cx("HomePage__svg-container")}>

            <div className={cx(
              {
                "HomePage__svg-show": this.state.activeIcon === 1 
              },
              {
                "HomePage__svg-hide": this.state.activeIcon !== 1
              }
            )}>

              <RainCloud></RainCloud>

            </div>

            <div className={cx(
              {
                "HomePage__svg-show": this.state.activeIcon === 2
              },
              {
                "HomePage__svg-hide": this.state.activeIcon !== 2
              }
            )}>

              <Storm></Storm>

            </div>

            <div className={cx(
              {
                "HomePage__svg-show": this.state.activeIcon === 3
              },
              {
                "HomePage__svg-hide": this.state.activeIcon !== 3
              }
            )}>

              <HeavyStorm></HeavyStorm>

            </div>

          </div>

          <div className={cx("HomePage__svg-container")}>

            <div className={cx(
              {
                "HomePage__svg-show": this.state.activeIcon === 1
              },
              {
                "HomePage__svg-hide": this.state.activeIcon !== 1
              }
            )}>

              <CloudOne></CloudOne>
              
            </div>

            <div className={cx(
              {
                "HomePage__svg-show": this.state.activeIcon === 2
              },
              {
                "HomePage__svg-hide": this.state.activeIcon !== 2
              }
            )}>

              <CloudTwo></CloudTwo>

            </div>

            <div className={cx(
              {
                "HomePage__svg-show": this.state.activeIcon === 3
              },
              {
                "HomePage__svg-hide": this.state.activeIcon !== 3
              }
            )}>

              <CloudThree></CloudThree>

             </div>

          </div>

        </div>

      </div>
    )
  }
}
