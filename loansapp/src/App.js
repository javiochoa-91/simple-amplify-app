
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Apply from './components/apply';
import Home from './components/home';

class App extends Component {
  render() {
      return (
          <div>
              {/*<AmplifySignOut /> */}
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