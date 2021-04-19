/* eslint-disable import/no-anonymous-default-export */
export default (state, { type, payload }) => {
  switch (type) {
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: true,
      };

    case "NOT_LOGGED_IN":
      return {
        ...state,
        loggedIn: false,
      };

    case "LOG_OUT":
      return {
        ...state,
        loggedIn: false,
      };

    case "LOAD_DASHBOARD_ENTRIES":
      return {
        ...state,
        dashboardEntries: payload,
      };

    default:
      return state;
  }
};
