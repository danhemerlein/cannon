import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import breakpoints from "utils/breakpoints";


import './styles.scss'

const BleuTapes = (props) => {

  const isTabletUp = useMediaQuery({
    query: breakpoints.tablet,
  });

  const backgroundImage = {
    backgroundImage: isTabletUp ? "url('/assets/bleu-tapes.png')" : "url('/assets/play-page-mobile.jpg')",
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
      <div className="BleuTapes BleuTapes__bg p1" style={backgroundImage}>
        <div className="BleuTapes__inner h100 none lg:block" style={backgroundImageInner}></div>
      </div>
    </a>
  );

}
export default BleuTapes;
