import React from 'react';
import { hot } from 'react-hot-loader';
import {
        BrowserRouter as Router,
        Route,
        Switch,
} from 'react-router-dom';

import HeaderComponent from "../components/HeaderComponent/HeaderComponent";


const AppContainer = () => (

        <Router>
                <HeaderComponent />
                <Switch>
                        <Route exact path="/payment" render={() => <div> Welcome To payment Page </div>} />
                        <Route exact path="/" render={() => <div> Welcome To payment Page </div>} />
                </Switch>
        </Router>
);

export default hot(module)(AppContainer);