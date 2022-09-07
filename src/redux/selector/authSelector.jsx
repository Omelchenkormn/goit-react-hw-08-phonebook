const getIsLoggedIn = state => state.user.isLoggIn;

const getUserName = state => state.user.user.name;

const getToken = state => state.user.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
};

export default authSelectors;
