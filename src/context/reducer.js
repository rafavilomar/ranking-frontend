import { SET_CONTEXT } from "./types";

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

        default:
            return{
                ...state
            }
    }
}
export default GeneralReducer;