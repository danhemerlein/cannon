import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import breakpoints from "utils/breakpoints";
import GoHome from "components/GoHome";

import './styles.scss'

const OneOfThree = (props) => {

  const isTabletUp = useMediaQuery({
    query: breakpoints.tablet,
  });

  const backgroundImage = {
    backgroundImage:isTabletUp ? "url('/assets/one-of-three.jpg')" : "url('/assets/fast-forward-mobile.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="OneOfThree p1 relative" style={backgroundImage}>

      <GoHome />

    </div>
  );
}

export default OneOfThree
