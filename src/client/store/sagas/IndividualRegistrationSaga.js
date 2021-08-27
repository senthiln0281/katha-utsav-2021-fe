import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

import * as actions from '../actions/index'

export function* ValidateIndividualRegistration(action) {
    //validate
    const { name,
        emailId,
        phoneNumber,
        School,
        City,
        Class,
        StoryCategory ,
        fileData
} = action;

console.log('sagas', fileData);
yield put(actions.validateSuccess(name, emailId, phoneNumber, School, City, Class, StoryCategory,fileData));
}
