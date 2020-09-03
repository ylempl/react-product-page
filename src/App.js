import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import routesConfig from './consts/routes';
import Menu from './components/Menu/Menu';
import MenuItems from './components/Menu/MenuItems';
import roles from './consts/roles';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Menu>
            <MenuItems />
        </Menu>
        <Switch>
            {routesConfig.filter((p) => p.roles.some(r => roles.includes(r))).map(({ path, Component }, key) => (
                <Route exact path={path} key={key} component={Component} />
            ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
