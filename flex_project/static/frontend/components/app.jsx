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
// import NavBarContainer from './nav/nav_bar_container';
// import HomepageContainer from './homepage/homepage_container';
// import Footer from './nav/footer';
import LoginContainer from './session/form_container';

const App = (store) => {
  return (
    <div className="container">
      <Route path="/" component={LoginContainer} />
      <Switch>

      </Switch>
    </div>
  );
};
export default App;

// <Route path="/" component={NavBarContainer} />
// <AuthRoute exact path="/" component={HomepageContainer} />
// <Route path="/" component={Footer} />
