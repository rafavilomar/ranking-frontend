import React, { useReducer } from "react"
import GeneralContext from "./context"
import GeneralReducer from "./reducer"
import { SET_CONTEXT, SET_SEARCH_TEACHER } from "./types"


const GeneralState = ({ children }) => {

    const initialState = {
        id: localStorage.getItem("id") || null,
        username: localStorage.getItem("username") || null,
        img: localStorage.getItem("img") || null,
        token: localStorage.getItem("token") || null,
        searchTeacher: null
    }

    const [state, dispatch] = useReducer(GeneralReducer, initialState);

    const setContext = (data) => {
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("img", data.img);
        localStorage.setItem("token", data.token);
        dispatch({
            type: SET_CONTEXT,
            payload: data
        })
    }

    const setSearchTeacher = (value) => {
        dispatch({
            type: SET_SEARCH_TEACHER,
            payload: value
        })
    }

    return (
        <GeneralContext.Provider value={{ setSearchTeacher, setContext, ...state }}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralState;