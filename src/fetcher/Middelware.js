import { removeAll } from "../utils/localStorage";

export const middelware = (response) => {
    if (response.status === 401) {
        removeAll()
        window.location.reload();
    }

}