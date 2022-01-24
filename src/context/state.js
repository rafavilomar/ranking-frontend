import React, { useReducer } from "react"
import GeneralContext from "./context"
import GeneralReducer from "./reducer"
import { SET_CONTEXT } from "./types"


const GeneralState = ({ children }) => {

    const initialState = {
        id: localStorage.getItem("id") || null,
        username: localStorage.getItem("username") || null,
        img: localStorage.getItem("img") || null,
        token: localStorage.getItem("token") || null
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

    return (
        <GeneralContext.Provider value={{ setContext, ...state }}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralState;