import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "utils/get";

import './MainView.scss'
import HomePage from 'components/HomePage';
import Stuff from 'components/Stuff';
import NotFound from 'components/NotFound';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
    console.log(model);
    
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" render={() => (

            <HomePage
              mainTitle={get(model, "fields.mainTitle", {})}
              footerTitle={get(model, "fields.footerTitle", {})}
              footerSubTitle={get(model, "fields.footerSubTitle", {})}
              soundLinkCTA={get(model, "fields.soundLinkCta", {})}
              instagramLinkCTA={get(model, "fields.instagramLinkCta", {})}
              twitterLinkCTA={get(model, "fields.twitterLinkCta", {})}
              backgroundImage={get(model, "fields.backgroundImage", {})}
              logo={get(model, "fields.logo", {})}
              font={get(model, 'fields.font')}
            />

          )} />

          <Route exact path="/stuff" render={() => (

            <Stuff 
              backgroundImage={get(model, "fields.backgroundImage", {})}
              logo={get(model, "fields.logo", {})}
              footerTitle={get(model, "fields.footerTitle", {})}
              footerSubTitle={get(model, "fields.footerSubTitle", {})}
              instagramLinkCTA={get(model, "fields.instagramLinkCta", {})}
              twitterLinkCTA={get(model, "fields.twitterLinkCta", {})}
              font={get(model, 'fields.font')}
              merchPrimary={get(model, 'fields.merchPrimary')}
              merchSecondary={get(model, 'fields.merchSecondary')}
            />

          )} />

          <Route component={NotFound} />

        </Switch>

      </Router>

    </div>
  );
};

export default MainView;