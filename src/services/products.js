const axios = require('axios');

export const productsRequest = async () => {
  try {
      const resp = await axios.get('http://localhost:3001/products');
      return resp.data
  } catch (err) {
      console.error(err);
  }
}
