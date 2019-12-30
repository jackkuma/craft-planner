import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RecipesEditor from '../containers/RecipesEditor';
import InputDataList from '../containers/InputDataList';
import CraftPlanner from '../containers/CraftPlanner';
import Nav from '../components/Nav';

const App = () => (
  <div className="app header-fixed">
    <InputDataList />
    <Nav />
    <div className="app-body">
      <div className="my-4 mx-auto" style={{ width: 640 }}>
        <Switch>
          <Route path="/recipe" component={RecipesEditor} />
          <Route path="/plan" component={CraftPlanner} />
          <Redirect to="/plan" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
