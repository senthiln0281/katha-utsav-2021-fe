import React from 'react';
import { hot } from 'react-hot-loader';
import {
        BrowserRouter as Router,
        Route,
        Switch,
} from 'react-router-dom';
import HomePage from '../components/Home/Home';

const AppContainer = () => (

        <Router>
                <Switch>
                        <Route exact path="/" render={() => <div className='home-page'> <HomePage/>  </div>} />
                        <Route exact path="/payment" render={() => <div> Welcome To Payment Page </div>} />
                </Switch>
        </Router>
);

export default hot(module)(AppContainer);