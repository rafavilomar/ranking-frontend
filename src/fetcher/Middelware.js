import removeAll from "../utils/localStorage";

const middelware = (response) => {
  if (response?.status === 401) {
    removeAll();
    window.location.reload();
  }
};
export default middelware;
