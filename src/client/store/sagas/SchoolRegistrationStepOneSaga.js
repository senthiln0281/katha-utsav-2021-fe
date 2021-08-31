import {
    put,
    takeEvery,
    all,
    call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import _ from 'lodash';
import { SchoolRegistrationStepOneValidation } from '../../Utils/index';

export function* ValidateSchoolStepOneRegistration(action) {
    const { schoolName,emailId,phoneNumber,schoolCoordinatorName,city } = action;



    //validation
    const errorObject = yield call(SchoolRegistrationStepOneValidation,schoolName,emailId,phoneNumber,schoolCoordinatorName,city)

    if (errorObject.isError) {
        yield put(actions.validateFailSchoolStepOne(errorObject.schoolNameError, errorObject.emailIdError, errorObject.phoneNumberError, errorObject.schoolCoordinatorNameError, errorObject.cityError));
    }
    else {
        yield put(actions.validateSuccessSchoolStepOne(schoolName,emailId,phoneNumber,schoolCoordinatorName,city));
    }
}
