import { SET_CONTEXT } from "./types";

export default (state, action) => {
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
            console.log("NOTHING");
            break;
    }
}