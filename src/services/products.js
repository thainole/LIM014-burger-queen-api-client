const axios = require('axios');

export const productsRequest = async () => {
  try {
      const resp = await axios.get('http://localhost:3001/products');
      console.log(resp.data)
      console.log(JSON.parse(resp.data))
      return resp.data
      /* let strObj = resp.data
      const jsonStr = strObj.replace(/(\w+:)|(\w+ :)/g, function(s) {
        return '"' + s.substring(0, s.length-1) + '":';
      });
      const hola = JSON.parse(jsonStr)
      console.log(resp.data)
      console.log(hola)
      return hola; */
  } catch (err) {
      console.error(err);
  }
}
