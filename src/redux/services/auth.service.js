import axios from "axios";

const API_URL = "http://localhost:1337/";

const register = (username, email, password) => {
  console.log("sent")
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};


const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {

     return response.data;
    });
};

export default {
  register,
  login
}