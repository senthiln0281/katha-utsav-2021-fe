import React from 'react';
import { hot } from 'react-hot-loader';
import {
        BrowserRouter as Router,
        Route,
        Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import IndividualRegistrationContainer from '../containers/IndividualRegistrationContainer';
import HomePage from '../containers/HomeContainer';

const AppContainer = (props) => {
        return (
                <Router>
                        <Switch>
                                {!props.showIndividualPopUp && <Route exact path="/" render={() => <div className='home-page'> <HomePage />  </div>} />}
                                {props.showIndividualPopUp && <Route exact path="/" render={() => <IndividualRegistrationContainer />} />}
                                <Route exact path="/payment" render={() => <div> Welcome To Payment Page </div>} />
                        </Switch>
                </Router>
        );
};

const mapStateToProps = (state) => {
        return {
                showIndividualPopUp: state.IndividualRegistrationReducer.showPopUp
        }
};




export default connect(
        mapStateToProps,
        null
)(AppContainer);