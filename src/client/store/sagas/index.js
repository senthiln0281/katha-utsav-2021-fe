import {
    takeEvery,
    all,
  } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {ValidateIndividualRegistration} from './IndividualRegistrationSaga';
import {ValidateSchoolStepOneRegistration} from './SchoolRegistrationStepOneSaga'

export  function* watchIndividualRegistrationCall() {
  yield all([
     takeEvery(actionTypes.VALID_INITIATE, ValidateIndividualRegistration)
  ]);
}


export  function* watchSchoolStepOneRegistrationCall() {
  yield all([
     takeEvery(actionTypes.VALID_INITIATE, ValidateIndividualRegistration),
     takeEvery(actionTypes.VALID_INITIATE_SCHOOL_STEPONE, ValidateSchoolStepOneRegistration)
  ]);
}
