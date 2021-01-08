import React, { Component } from "react";
import './styles.scss'

export default class OneOfThree extends Component {

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    const backgroundImageInner = {
      backgroundImage: "url('/assets/timeline.png')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    const backgroundImageInnerTwo = {
      backgroundImage: "url('/assets/song-titles-timeline.png')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <div className="NewMusicPage p1 relative" style={backgroundImage}>

        <div className="h100 z1" style={backgroundImageInner}></div>
        <div className="NewMusicPage__titles absolute" style={backgroundImageInnerTwo}></div>

      </div>
    );
  }
}
