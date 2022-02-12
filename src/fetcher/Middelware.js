export const middelware = (response) => {
    if (response.status === 401) {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("img");
        localStorage.removeItem("token");

        window.location.reload();
    }

}