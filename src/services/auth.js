const axios = require('axios');
const jwtDecode = require('jwt-decode')

export const getToken = async (requestToken) => {
  const resp = await axios.post('https://burger-queen-api-yrem.herokuapp.com/auth', requestToken);

  switch (resp.status) {
  case 200:
    localStorage.setItem('token', resp.data.token)
    const decodeToken = jwtDecode.default(resp.data.token)
    return decodeToken;
  case 400:
    throw new Error('Inserta un email y contraseña correctos')
  default:
    throw new Error(resp.statusText)
  }
}
