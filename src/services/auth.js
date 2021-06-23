// import axios from "axios";
const axios = require('axios');

export const postRequest = async (email, password) => {
  const requestToken = { 
      email: email,
      password: password,
  }
  try {
      const resp = await axios.post('http://localhost:3001/auth', requestToken);
      console.log(resp.data)
      return resp.data;
  } catch (err) {
      console.error(err);
  }
}
