import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import OurTeamPage from './components/our-team/OurTeamPage'
import OurWorkPage from './components/our-work/OurWorkPage'
import ContactUsPage from './components/contact-us/ContactUsPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="our-work" component={OurWorkPage} />
    <Route path="our-team" component={OurTeamPage} />
    <Route path="contact-us" component={ContactUsPage} />
  </Route>
);
