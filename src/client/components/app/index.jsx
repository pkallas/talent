import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../notFound';
import ScrollToTop from '../scrollToTop';
import ProfilePage from '../../containers/profile';
import LearnerGallery from '../../containers/learnerGallery';
import ErrorBoundary from '../../containers/errorBoundary';
import SplashRNG from '../../containers/splashRNG';
import Loading from '../../containers/loading';
import Footer from '../footer';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Loading>
            <Switch>
              <Route exact path="/" component={SplashRNG} />
              <Route exact path="/learners" component={LearnerGallery} />
              <Route exact path="/learners/:githubHandle" component={ProfilePage} />
              <Route component={NotFound} />
            </Switch>
          </Loading>
          <ScrollToTop />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}
