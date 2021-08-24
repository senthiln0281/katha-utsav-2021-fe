import React from 'react';
import { hot } from 'react-hot-loader';
import {
        BrowserRouter as Router,
        Route,
        Switch,
} from 'react-router-dom';


const AppContainer = () => (
        <Router>
                <Switch>
                <Route exact path="/login" render={() => <div> Welcome To payment Page </div>} />

                        <Route exact path="/payment" render={() => <div> Welcome To payment Page </div>} />
                        <Route exact path="/" render={() => <div> Welcome To Home Page </div>} />
                </Switch>
        </Router>
);

export default hot(module)(AppContainer);