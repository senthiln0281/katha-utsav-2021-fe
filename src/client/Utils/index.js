export const renderIf = (condition, componentCallback, falseCallback) => {
  if (condition()) {
    return componentCallback();
  } else if (falseCallback) {
    return falseCallback();
  } else {
    return null;
  }
};

export const IndividualRegistrationValidation = (name, emailId, phoneNumber, School, City, Class, StoryCategory, fileData) => {
  let errorObject = { emailError: "", nameError: "", phoneNumberError: "", SchoolError: "", CityError: "", ClassError: "", StoryCategoryError: "", fileError: "", isError: false }
  let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId);
  let phoneNumberValid = /^\d+$/.test(phoneNumber);
  let schoolValid = /^[a-zA-Z]+$/.test(School);
  let cityValid  = /^[a-zA-Z]+$/.test(School);

  if (_.isNull(emailId) || _.isEmpty(emailId) || !emailValid) {
    errorObject.emailError = "Please enter a valid email";
    errorObject.isError = true;
  }
  if (_.isEmpty(name) || _.isNull(name)) {
    errorObject.nameError = "Please enter a valid name";
    errorObject.isError = true;
  }
  if (_.isEmpty(School) || _.isNull(School) || !schoolValid) {
    errorObject.SchoolError = "Please enter a valid school";
    errorObject.isError = true;
  }
  if (_.isNull(phoneNumber) || _.isEmpty(phoneNumber) || !phoneNumberValid) {
    errorObject.phoneNumberError = "Please enter a valid phoneNumber";
    errorObject.isError = true;
  }
  if (_.isEmpty(StoryCategory) || !_.includes(["Fiction", "Non-Fiction", "Poetry"], StoryCategory)) {
    errorObject.StoryCategoryError = "Please enter a valid StoryCategory";
    errorObject.isError = true;
  }
  if (_.isEmpty(Class) || !_.includes(["4 to 6", "7 to 9 ", "10 to 12"], Class)) {
    errorObject.ClassError = "Please enter a valid Class";
    errorObject.isError = true;
  }
  if (_.isEmpty(fileData.name) || fileData.size > 10000000) {
    errorObject.fileError = "Please Upload file less than 10mb";
    errorObject.isError = true;
  }
  if (_.isEmpty(City) || _.isNull(City) || !cityValid) {
    errorObject.CityError = "Please Provide a valid city";
    errorObject.isError = true;
  }
  return errorObject;
}