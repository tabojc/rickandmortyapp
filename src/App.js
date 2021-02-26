import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Staring from 'components/pages/Staring/Staring';
import Location from 'components/pages/Location/Location';
import Episode from 'components/pages/Episode/Episode';
import { Navigation } from './components/navigation';
import { Sidebar } from 'components/navigation';
import { Grid } from '@material-ui/core'
import NavigationState from 'context/navigation/NavigationState';

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <NavigationState>
            <Navigation />
          </NavigationState>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <NavigationState>
            <Sidebar />
          </NavigationState>
        </Grid>
        <Grid item xs={12} sm={10} sm={10} lg={10}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/protagonistas' component={Staring} />
            <Route path='/lugares' component={Location} />
            <Route path='/episodios' component={Episode} />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
