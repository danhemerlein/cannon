import React from "react";
import get from "utils/get";

import HomePage from 'components/HomePage';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  console.log(model.fields.backgroundImage.fields.file.url);
  return (
    <div>
      <HomePage
        mainTitle={get(model, "fields.mainTitle", {})}
        footerTitle={get(model, "fields.footerTitle", {})}
        footerSubTitle={get(model, "fields.footerSubTitle", {})}
        soundLinkCTA={get(model, "fields.soundLinkCta", {})}
        instagramLinkCTA={get(model, "fields.instagramLinkCta", {})}
        twitterLinkCTA={get(model, "fields.twitterLinkCta", {})}
        backgroundImage={get(model, "fields.backgroundImage", {})}
      >

      </HomePage>
    </div>
  );
};

export default MainView;