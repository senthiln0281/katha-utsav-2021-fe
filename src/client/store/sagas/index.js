import {
    put,
    takeEvery,
    all,
  } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {helloCall} from './hello';
import {ValidateIndividualRegistration} from './IndividualRegistrationSaga';

export  function* watchHelloCall() {
  yield all([
     takeEvery(actionTypes.HELLO_CALL, helloCall)
  ]);
}

export  function* watchIndividualRegistrationCall() {
  yield all([
     takeEvery(actionTypes.VALID_INITIATE, ValidateIndividualRegistration)
  ]);
}

