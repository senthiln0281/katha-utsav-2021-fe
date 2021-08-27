import * as actionTypes from './actionTypes';


export const validate = (name, emailId, phoneNumber, School, City, Class, StoryCategory,fileData) =>{
    console.log('filedata', fileData);
    return {
        type: actionTypes.VALID_INITIATE,
        name,
        emailId,
        phoneNumber,
        School,
        City,
        Class,
        StoryCategory,
        fileData
    }
}

export const validateSuccess = (name,emailId,phoneNumber, School, City,Class, StoryCategory,fileData) =>{
    return{
        type: actionTypes.VALID_SUCCESS,
        name,
        emailId,
        phoneNumber,
        School,
        City,
        Class,
        StoryCategory,
        fileData
    }
}
