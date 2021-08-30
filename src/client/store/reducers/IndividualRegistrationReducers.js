import * as actionTypes from '../actions/actionTypes';

const initialState ={
    showPopUp: false,
    IndividualRegistrationValidInfo:{

    },
    IndividualRegistrationErrorInfo: {
        nameMessage: '',
        emailIdMessage: '',
        phoneNumberMessage: '',
        SchoolMessage: '',
        CityMessage: '',
        ClassMessage: '',
        StoryCategoryMessage: '',
        fileDataMessage: ''
    }
}

const IndividualRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VALID_SUCCESS:
            const { name,
                emailId,
                phoneNumber,
                School,
                City,
                Class,
                StoryCategory, fileData } = action
            const fileInfo = { name: fileData.name, size: fileData.size }
            const IndividualRegistrationValidInfo = {name,emailId, phoneNumber,School,City,Class,StoryCategory,fileInfo}
            return {
                ...state,
                IndividualRegistrationValidInfo,
                IndividualRegistrationErrorInfo : {
                    nameMessage: "",
                    emailIdMessage: "",
                    SchoolMessage:"",
                    CityMessage:"",
                    ClassMessage:"",
                    StoryCategoryMessage:"",
                    fileDataMessage:"",
                    phoneNumberMessage:""
                }
            }
        case actionTypes.VALID_FAIL:
            return {
                ...state,
                IndividualRegistrationErrorInfo: action.errorPayload
            }
        case actionTypes.IS_SHOW_POPUP:
            return{
                ...state,
                showPopUp: action.showPopUp
            }
        default:
            return state;
    }
};

export default IndividualRegistrationReducer;