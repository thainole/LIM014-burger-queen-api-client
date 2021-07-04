// const axios = require('axios');

// export const postOrder = async (storedToken, obj) => {
//     const resp = await axios({
//       method: 'post',
//       url: 'https://burger-queen-api-yrem.herokuapp.com/products',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${storedToken}`,
//       },
//       data: obj
//     });
//     switch (resp.status) {
//       case 200:
//         return resp.data;
//       case 400:
//         throw new Error('no se indica `userId` o se intenta crear una orden sin productos'); 
//       case 401:
//         throw new Error('si no hay cabecera de autenticación');      
//       default:
//         throw new Error(resp.statusText);
//     } 
//   }