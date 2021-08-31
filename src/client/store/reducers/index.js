import IndividualRegistrationReducer from './IndividualRegistrationReducers';
import SchoolRegistrationStepOneReducer from './SchoolRegistration.StepOne.Reducer';
import SchoolRegistrationReducer from './SchoolRegistrationReducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    IndividualRegistrationReducer,
    SchoolRegistrationStepOneReducer,
    SchoolRegistrationReducer
  });
  
  export default RootReducer;