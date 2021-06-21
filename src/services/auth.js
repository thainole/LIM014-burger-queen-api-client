import axios from "axios";

export const postRequest = async (email, password) => {
  const requestToken = { 
      email: email,
      password: password,
  }
  try {
      const resp = await axios.post('http://localhost:3001/auth', requestToken);
      console.log('hola soy resp.data', resp.data);
      console.log('hola soy resp', resp)
  } catch (err) {
      console.error(err);
  }
}
