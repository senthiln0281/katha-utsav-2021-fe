export const renderIf = (condition, componentCallback, falseCallback) => {
    if (condition()) {
      return componentCallback();
    } else if (falseCallback) {
      return falseCallback();
    } else {
      return null;
    }
};