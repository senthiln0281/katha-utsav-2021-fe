import * as actionTypes from '../actions/actionTypes';


const IndividualRegistrationReducer = (state = {}, action) => {
    console.log('action', action);
    switch (action.type) {
        case actionTypes.VALID_SUCCESS:
            const { name,
                emailId,
                phoneNumber,
                School,
                City,
                Class,
                StoryCategory,fileData } = action
                console.log('finallog', fileData);
                const fileInfo = {name:fileData.name}
            return {
                ...state,
                name,
                emailId,
                phoneNumber,
                School,
                City,
                Class,
                StoryCategory,
                fileInfo
            }
        default:
            return state;
    }
};

export default IndividualRegistrationReducer;