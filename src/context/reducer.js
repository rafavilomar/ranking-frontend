import { SET_CONTEXT, SET_SEARCH_TEACHER } from "./types";

const GeneralReducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_CONTEXT:
            return {
                token: payload.token,
                id: payload.id,
                username: payload.username,
                img: payload.img
            }

        case SET_SEARCH_TEACHER:
            return {
                ...state,
                searchTeacher: payload
            }

        default:
            return {
                ...state
            }
    }
}
export default GeneralReducer;