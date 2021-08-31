import * as actionTypes from '../actions/actionTypes';

const initialState ={
    showPopUp: false
}

const SchoolRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_SHOW_POPUP_SCHOOL:
            return{
                ...state,
                showPopUp: action.showPopUp
            }
        default:
            return state;
    }
};

export default SchoolRegistrationReducer;