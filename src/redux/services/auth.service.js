import axios from "axios";

const API_URL = "http://localhost:1337/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register",{
  method: 'post',

  body: JSON.stringify({username,email, password}),

  headers: {
    'Content-Type': 'application/json'
  }
});
};

export default {
  register
}