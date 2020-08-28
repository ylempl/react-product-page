import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import routesConfig from './consts/routes';
import Menu from './components/Menu/Menu';
import MenuItems from './components/Menu/MenuItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
            <MenuItems />
        </Menu>
        <Switch>
            {routesConfig.map(({ path, Component }, key) => (
                <Route exact path={path} key={key} component={Component} />
            ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
