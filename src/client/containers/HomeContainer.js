import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from '../store/actions/index';
import Home from '../components/Home/Home'


    
    const mapDispatchToProps = (dispatch) => {
        return {
          showIndividualPopUp: (value) => dispatch(action.showPopUp(value)),
        }
      }



const HomeContainer = connect(
    null,
    mapDispatchToProps
  )(Home);
  
  export default HomeContainer;
  