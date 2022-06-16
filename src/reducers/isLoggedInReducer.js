let isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    case ("LOGIN_FAILURE", "LOGOUT"):
      return false;
    default:
      return state;
  }
};
export default isLoggedInReducer;
