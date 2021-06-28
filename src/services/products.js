const axios = require('axios');

export const productsRequest = async (storedToken) => {
  
  const resp = await axios({
    method: 'get',
    url: 'https://appi-burger-queen-client.herokuapp.com/products',
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
    default:
      throw new Error(resp.statusText);
  }
}
