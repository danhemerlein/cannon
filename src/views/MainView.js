import React from "react";
import get from "utils/get";

import HomePage from 'components/HomePage';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  return (
    <div className="">
      <HomePage></HomePage>
    </div>
  );
};

export default MainView;