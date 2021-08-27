import {
    put,
    takeEvery,
    all,
    call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import _ from 'lodash';
import { IndividualRegistrationValidation } from '../../Utils/index';

export function* ValidateIndividualRegistration(action) {
    const { name,
        emailId,
        phoneNumber,
        School,
        City,
        Class,
        StoryCategory,
        fileData
    } = action;



    //validation
    const errorObject = yield call(IndividualRegistrationValidation, name, emailId, phoneNumber, School, City, Class, StoryCategory, fileData)

    if (errorObject.isError) {
        yield put(actions.validateFail(errorObject.nameError, errorObject.emailError, errorObject.phoneNumberError, errorObject.SchoolError, errorObject.CityError, errorObject.ClassError, errorObject.StoryCategoryError, errorObject.fileError));
    }
    else {
        yield put(actions.validateSuccess(name, emailId, phoneNumber, School, City, Class, StoryCategory, fileData));
    }
}
