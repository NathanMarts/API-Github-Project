import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Repositories from '../pages/Repositories';
import SingIn from '../pages/SignIn';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SingIn} />
        <Route path="/home" exact component={Home} isPrivate />
        <Route path="/repos" exact component={Repositories} isPrivate />
        <Route path="/followers" exact component={Followers} isPrivate />
        <Route path="/following" exact component={Following} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
