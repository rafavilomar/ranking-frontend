const removeAll = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("username");
  localStorage.removeItem("img");
  localStorage.removeItem("token");
};
export default removeAll;
