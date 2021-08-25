import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import IndividualRegistration from '../components/IndividualRegistration';
import * as action from '../store/actions/index';


const mapDispatchToProps = (dispatch) => {
  return {
    validateDetails: (name, emailId, phoneNumber,School,City,Class,StoryCategory) => dispatch(action.validate(name, emailId, phoneNumber,School,City,Class, StoryCategory)),

  }
}

const IndividualRegistrationContainer = connect(
  null,
  mapDispatchToProps
)(IndividualRegistration);

export default IndividualRegistrationContainer;
