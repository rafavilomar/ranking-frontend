import React, { useReducer } from "react";
import PropTypes from "prop-types";
import GeneralContext from "./context";
import GeneralReducer from "./reducer";
import { SET_CONTEXT, SET_SEARCH_TEACHER, SET_TOKEN } from "./types";

function GeneralState({ children }) {
  const initialState = {
    id: localStorage.getItem("id") || null,
    username: localStorage.getItem("username") || null,
    img: localStorage.getItem("img") || null,
    token: localStorage.getItem("token2") || null,
    searchTeacher: "",
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const setContext = (data) => {
    localStorage.setItem("id", data.id);
    localStorage.setItem("username", data.username);
    localStorage.setItem("img", data.img);
    localStorage.setItem("token", data.token);
    localStorage.setItem("token2", data.token);
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
      localStorage.setItem("token2", token);
      dispatch({
        type: SET_TOKEN,
        payload: token,
      });
    }
  };

  return (
    <GeneralContext.Provider
      value={{ setToken, setSearchTeacher, setContext, ...state }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
export default GeneralState;

GeneralState.propTypes = {
  children: PropTypes.element.isRequired,
};
