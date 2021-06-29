const axios = require('axios');

export const usersRequest = async (storedToken) => {
  // const resp = await axios.get('http://localhost:3001/users');
  // console.log(resp.data)
  const resp = await axios({
    method: 'get',
    url: 'https://appi-burger-queen-client.herokuapp.com/users',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
      // nos ayuda a autorizar
    }
  });

  switch (resp.status) {
    case 200:
      return resp.data;
    case 401:
      throw new Error('Inserta un email y contraseña correctos'); 
    case 403:
      throw new Error('No eres admin');       
    default:
      throw new Error(resp.statusText);
  } 
}
