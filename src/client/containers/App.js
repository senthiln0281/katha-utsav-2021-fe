import React from 'react';
import { hot } from 'react-hot-loader';
import {
        BrowserRouter as Router,
        Route,
        Switch,
} from 'react-router-dom';

import IndividualRegistration from '../components/IndividualRegistration';
import IndividualRegistrationContainer from '../containers/IndividualRegistrationContainer';


const AppContainer = () => (
        <Router>
                <Switch>
                <Route exact path="/" render={() => <IndividualRegistrationContainer />} />

                        <Route exact path="/payment" render={() => <div> Welcome To payment Page </div>} />
                </Switch>
        </Router>
);

export default hot(module)(AppContainer);