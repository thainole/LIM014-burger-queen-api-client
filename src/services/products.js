const axios = require('axios');

export const productsRequest = async (storedToken) => {
  const resp = await axios({
    method: 'get',
    url: 'https://burger-queen-api-yrem.herokuapp.com/products',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
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

export const postProduct = async (storedToken, obj) => {
  const resp = await axios({
    method: 'post',
    url: 'https://burger-queen-api-yrem.herokuapp.com/products',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
    data: obj
  });
  switch (resp.status) {
    case 200:
      return resp.data;
    case 400:
      throw new Error('Indique precio y nombre para el producto'); 
    case 401:
      throw new Error('Inserta un email y contraseña correctos'); 
    case 403:
      throw new Error('No eres admin');       
    default:
      throw new Error(resp.statusText);
  } 
}

export const updateProduct = async (storedToken, id, obj) => {
  const resp = await axios({
    method: 'put',
    url: `https://burger-queen-api-yrem.herokuapp.com/products/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
    data: obj,
  });
  switch (resp.status) {
    case 200:
      return resp.data;
    case 400:
      throw new Error('Indique precio y nombre para el producto'); 
    case 401:
      throw new Error('Inserta un email y contraseña correctos'); 
    case 403:
      throw new Error('No eres admin');
    case 404:
      throw new Error('El producto indicado no existe');                
    default:
      throw new Error(resp.statusText);
  } 
}

export const deleteProduct = async (storedToken, id) => {

  const resp = await axios({
    method: 'delete',
    url: `https://burger-queen-api-yrem.herokuapp.com/products/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    }
  })

  switch (resp.status) {
    case 200:
      return resp.data;
    case 401:
      throw new Error('Bad request'); 
    case 403:
      throw new Error('No eres admin'); 
    case 404:
      throw new Error('El producto indicado no existe');       
    default:
      throw new Error(resp.statusText);
  } 
} 
 