
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Apply from './app/features/apply/apply';
import Home from './app/features/home';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


class App extends Component {
  render() {
      return (
          <div>
              <withAuthenticator>Sign In</withAuthenticator>
              <BrowserRouter>
                  <Switch>
                      <Route path='/' exact component={Home}/>
                      <Route path='/loans' exact component={Apply}/>
                  </Switch>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;