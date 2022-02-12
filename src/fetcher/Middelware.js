const middelware = (response) => {
    console.log("Middelware");

    if (response.status === 401) {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("img");
        localStorage.removeItem("token");

        window.location.reload()
        
    }

}
export default middelware;