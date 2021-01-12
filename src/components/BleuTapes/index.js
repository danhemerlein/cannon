import React, { Component } from "react";
import './styles.scss'

export default class BleuTapes extends Component {

  render() {
    const backgroundImage = {
      backgroundImage: "url('/assets/bleu-tapes.png')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    const backgroundImageInner = {
      backgroundImage: "url('/assets/bleu-tracks.png')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    return (
      <a
        href="https://open.spotify.com/album/0p6BK5gxpxydQPG5HsyOIl?si=WUH1JklSRBmXB7x3AgZdKQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="BleuTapes p1" style={backgroundImage}>
          {/*
          <div className="h100 w100 relative ocr">
            <div>
              <h2>1. youngest child (2:15)</h2>
              <p>(C. Few)</p>
              <p>produced by: Cannon Few</p>
              <p>mixed by: Cannon Few</p>
              <p>mastered by: Tom Waltz</p>
            </div>

            <div>
              <h2>1. backpedal (2:01)</h2>
              <p>(C. Few, L. Doyle, T. Kellan)</p>
              <p>produced by: Cannon Few</p>
              <p>mixed by: Cannon Few</p>
              <p>mastered by: Tom Waltz</p>
            </div>
          </div>
           */}

          <div className="h100 none lg:block" style={backgroundImageInner}></div>
        </div>
      </a>
    );
  }
}
