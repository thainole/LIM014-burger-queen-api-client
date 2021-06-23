// import axios from "axios";
const axios = require('axios');
const jwtDecode = require('jwt-decode')

export const getToken = async (requestToken) => {
/*   try { */
      const resp = await axios.post('http://localhost:3001/auth', requestToken);
      
      console.log(resp, 'hola')

      switch (resp.status) {
        case 200:
          const decodeToken = jwtDecode.default(resp.data.token)
          return decodeToken;
        case 400:
          throw new Error('Inserta un email y contraseña correctos')
        default:
          throw new Error(resp.statusText)
      }
      // return decodeToken;
  /* } catch (err) {
    console.log(err) */
/*       switch (key) {
        case value:
          
          break;
      
        default:
          break;
      } 
  }*/
}
