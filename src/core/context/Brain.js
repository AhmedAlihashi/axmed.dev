import React, { useCallback, useEffect, useReducer } from "react";
import { deleteDashboardEntry, getDashboardEntry } from "../api/dashboard";
import appReducer from "./appReducer";
//firebase
import firebase from "firebase/app";
import "firebase/auth";
import { logoutUser } from "../api/auth";
import AppContext from "./appContext";

const Brain = (props) => {
  const initialState = {
    loggedIn: false,
    dashboardEntries: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn, dashboardEntries } = state;

  const loadDashboardEntries = () =>
    getDashboardEntry().then((res) =>
      dispatch({
        type: "LOAD_DASHBOARD_ENTRIES",
        payload: res,
      })
    );

  const onLoadDashboardEntries = useCallback(loadDashboardEntries, []);

  useEffect(() => {
    authCheck();

    if (!dashboardEntries && loggedIn) {
      onLoadDashboardEntries();
    }
  }, [onLoadDashboardEntries, dashboardEntries, loggedIn]);

  const authCheck = () =>
    firebase.auth().onAuthStateChanged((user) =>
      user
        ? dispatch({
            type: "LOGGED_IN",
          })
        : dispatch({ type: "NOT_LOGGED_IN" })
    );

  const onLogout = () => {
    logoutUser();
    dispatch({ type: "LOG_OUT" });
  };

  const removeDashboardItem = async (id) =>
    await deleteDashboardEntry(id).then(
      async () => await onLoadDashboardEntries()
    );

  return (
    <AppContext.Provider
      value={{
        loggedIn: state.loggedIn,
        dashboardEntries: state.dashboardEntries,

        removeDashboardItem,
        loadDashboardEntries,

        onLogout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Brain;
