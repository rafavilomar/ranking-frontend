import React, { useMemo, useReducer } from "react";
import GeneralContext from "./context";
import GeneralReducer from "./reducer";
import { SET_CONTEXT, SET_SEARCH_TEACHER, SET_TOKEN } from "./types";

function GeneralState({ children }) {
  const initialState = {
    id: localStorage.getItem("id") || null,
    username: localStorage.getItem("username") || null,
    img: localStorage.getItem("img") || null,
    token: localStorage.getItem("token") || null,
    searchTeacher: "",
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const setContext = (data) => {
    localStorage.setItem("id", data.id);
    localStorage.setItem("username", data.username);
    localStorage.setItem("img", data.img);
    localStorage.setItem("token", data.token);
    dispatch({
      type: SET_CONTEXT,
      payload: data,
    });
  };

  const setSearchTeacher = (value) => {
    dispatch({
      type: SET_SEARCH_TEACHER,
      payload: value,
    });
  };

  const setToken = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      dispatch({
        type: SET_TOKEN,
        payload: token,
      });
    }
  };

  const providerValue = useMemo(() => ({
    setToken,
    setSearchTeacher,
    setContext,
    ...state,
  }), []);

  return (
    <GeneralContext.Provider value={providerValue}>
      {children}
    </GeneralContext.Provider>
  );
}
export default GeneralState;
