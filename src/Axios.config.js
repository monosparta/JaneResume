import Axios from "axios"
const axios = (baseURL) => {
const instance = Axios.create({
baseURL: "https://42a6-220-132-230-75.ngrok.io/",//back-end
headers: { 'Content-Type': 'application/json' },
timeout: 5000,
});
return instance;
}
export {axios};
export default axios();