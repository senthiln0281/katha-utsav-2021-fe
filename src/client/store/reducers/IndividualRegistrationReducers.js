import * as actionTypes from '../actions/actionTypes';


const IndividualRegistrationReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.VALID_SUCCESS:
            const { name,
                emailId,
                phoneNumber,
                School,
                City,
                Class,
                StoryCategory } = action
            return {
                ...state,
                name,
                emailId,
                phoneNumber,
                School,
                City,
                Class,
                StoryCategory
            }
        default:
            return state;
    }
};

export default IndividualRegistrationReducer;