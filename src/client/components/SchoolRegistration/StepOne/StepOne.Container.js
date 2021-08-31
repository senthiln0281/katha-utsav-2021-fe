import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from '../../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    schoolNameMessage: state.SchoolRegistrationStepOneReducer.SchoolRegistrationStepOneErrorInfo.schoolNameMessage,
    emailIdMessage: state.SchoolRegistrationStepOneReducer.SchoolRegistrationStepOneErrorInfo.emailIdMessage,
    phoneNumberMessage : state.SchoolRegistrationStepOneReducer.SchoolRegistrationStepOneErrorInfo.phoneNumberMessage,
    schoolCoordinatorNameMessage: state.SchoolRegistrationStepOneReducer.SchoolRegistrationStepOneErrorInfo.schoolCoordinatorNameMessage,
    cityMessage: state.SchoolRegistrationStepOneReducer.SchoolRegistrationStepOneErrorInfo.cityMessage,
  }};


  const mapDispatchToProps = (dispatch) => {
    return {
      validateDetails: (schoolName,emailId,phoneNumber,schoolCoordinatorName,city) => dispatch(action.validateSchoolStepOne(schoolName,emailId,phoneNumber,schoolCoordinatorName,city)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps);