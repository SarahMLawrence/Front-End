//============//
//  IMPORTS   //
//============//
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  return axios.create({
    baseURL:' https://lambda-howto.herokuapp.com/api',
    headers: {
      authorization: token,
      username: username,
      password: password
    },
    
  });
};


