/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login'
import Timeline from './pages/Timeline'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Login}></Route>
          <Route path="/timeline" component={Timeline}></Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
