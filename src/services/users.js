const axios = require('axios');

export const usersRequest = async (storedToken) => {
  const resp = await axios({
    method: 'get',
    url: 'https://appi-burger-queen-client.herokuapp.com/users',
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
    case 403:
      throw new Error('No eres admin');       
    default:
      throw new Error(resp.statusText);
  } 
}

export const postUser = async (storedToken, obj) => {
  const resp = await axios({
    method: 'post',
    url: 'https://appi-burger-queen-client.herokuapp.com/users',
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
      throw new Error('Inserta un email y contraseña para el usuario'); 
    case 401:
      throw new Error('Inserta un email y contraseña correctos'); 
    case 403:
      throw new Error('No eres admin');       
    default:
      throw new Error(resp.statusText);
  } 
}

export const deleteUser = async (storedToken, id) => {

  const resp = await axios({
    method: 'delete',
    url: `https://appi-burger-queen-client.herokuapp.com/users/${id}`,
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
      throw new Error('Correo no existe');       
    default:
      throw new Error(resp.statusText);
  } 
} 
