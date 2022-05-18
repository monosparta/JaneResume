import Axios from "axios"
const axios = (baseURL) => {
const instance = Axios.create({
baseURL: "http://localhost:3000/",//back-end
headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'},
timeout: 5000,
});
return instance;
}
export {axios};
export default axios();