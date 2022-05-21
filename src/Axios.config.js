import Axios from "axios";
const token = localStorage.getItem("token");

const axios = (baseURL) => {
  const instance = Axios.create({
    baseURL: "http://localhost:3000/", //back-end
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
    timeout: 5000,
  });
  return instance;
};
export { axios };
export default axios();
