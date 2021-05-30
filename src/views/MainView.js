// import HomePage from 'components/HomePage';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BleuTapes from '../components/BleuTapes'
import MerchPage from '../components/MerchPage'
import NewHomePage from '../components/NewHomePage'
// import NewMusicPage from 'components/NewMusicPage';
import NewNewMusicPage from '../components/NewNewMusicPage'
import NotFound from '../components/NotFound'
import OneOfThree from '../components/OneOfThree'
import Videos from '../components/Videos'
import { get } from '../utils'
import './MainView.scss'

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>

  let site = []
  let musicPage = []

  for (let i = 0; i < model.length; i++) {
    const element = model[i]

    if ('artwork' in element.fields) {
      musicPage.push(element)
    } else {
      site = element
    }
  }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <NewHomePage />} />

          <Route
            exact
            path='/videos'
            render={() => (
              <Videos
                backgroundImage={get(site, 'fields.backgroundImage', {})}
              />
            )}
          />

          <Route exact path='/bleu-tapes' render={() => <BleuTapes />} />

          <Route exact path='/one-of-three' render={() => <OneOfThree />} />

          {/* <Route
            exact
            path="/old"
            render={() => (
              <HomePage
                mainTitle={get(site, "fields.mainTitle", {})}
                footerTitle={get(site, "fields.footerTitle", {})}
                footerSubTitle={get(site, "fields.footerSubTitle", {})}
                soundLinkCTA={get(site, "fields.soundLinkCta", {})}
                instagramLinkCTA={get(site, "fields.instagramLinkCta", {})}
                twitterLinkCTA={get(site, "fields.twitterLinkCta", {})}
                backgroundImage={get(site, "fields.backgroundImage", {})}
                logo={get(site, "fields.logo", {})}
                secondaryLogo={get(site, "fields.secondaryLogo", {})}
                font={get(site, "fields.font")}
                heroImage={get(site, "fields.heroImage", {})}
                convoImage={get(site, "fields.conversationsLogo", {})}
              />
            )}
          /> */}

          <Route
            exact
            path='/merch'
            render={() => (
              <MerchPage
                backgroundImage={get(site, 'fields.backgroundImage', {})}
                logo={get(site, 'fields.logo', {})}
                secondaryLogo={get(site, 'fields.secondaryLogo', {})}
                footerTitle={get(site, 'fields.footerTitle', {})}
                footerSubTitle={get(site, 'fields.footerSubTitle', {})}
                instagramLinkCTA={get(site, 'fields.instagramLinkCta', {})}
                twitterLinkCTA={get(site, 'fields.twitterLinkCta', {})}
                font={get(site, 'fields.font')}
                merchPrimary={get(site, 'fields.merchPrimary')}
                merchSecondary={get(site, 'fields.merchSecondary')}
              />
            )}
          />

          <Route
            exact
            path='/music'
            render={() => (
              // <NewMusicPage backgroundImage={get(site, "fields.backgroundImage", {})} />
              <NewNewMusicPage
                backgroundImage={get(site, 'fields.backgroundImage', {})}
              />
              // <MusicPage
              //   backgroundImage={get(site, "fields.backgroundImage", {})}
              //   logo={get(site, "fields.logo", {})}
              //   secondaryLogo={get(site, "fields.secondaryLogo", {})}
              //   projects={musicPage}
              // />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default MainView
