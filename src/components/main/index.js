import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../home';
import FullRoster from './../fullroster';
import Player from './../player';
import Schedule from './../schedule';

const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/roster' component={FullRoster} />
        <Route path='/roster/:number' component={Player} />
        <Route path='/schedule' component={Schedule} />
      </Switch>
    </main>
  )
}

export default Main;