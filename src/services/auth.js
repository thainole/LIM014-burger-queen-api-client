// import axios from "axios";
const axios = require('axios');
const jwtDecode = require('jwt-decode')

export const getToken = async (requestToken) => {
  try {
      const resp = await axios.post('http://localhost:3001/auth', requestToken);
      const decodeToken = jwtDecode.default(resp.data.token)
      return decodeToken;
  } catch (err) {
      console.error(err);
  }
}
