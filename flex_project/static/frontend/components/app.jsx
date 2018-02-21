import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Refresh
} from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import HomepageContainer from './homepage/homepage_container';
import Footer from './nav/footer';


const App = (store) => {
  return (
    <div className="container">
      <Route path="/" component={NavBarContainer} />
      <AuthRoute exact path="/" component={HomepageContainer} />
      <Switch>

      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
};
export default App;
