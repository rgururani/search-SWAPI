import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import {requireAuth} from './utils/checkuser';


export default function createRoutes(store){
  return(
    <Route path="/" component={App}>
      <IndexRoute component={LoginPage}/>
      <Route path="Search" component={SearchPage} onEnter={requireAuth(store)} />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}

