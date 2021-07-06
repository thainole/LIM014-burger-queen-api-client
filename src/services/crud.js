const axios = require('axios');

//--------------GET----------------

const getFn = async (token, keyword) => {
  const resp = await axios({
    method: 'get',
    url: `https://burger-queen-api-yrem.herokuapp.com/${keyword}?limit=20&page=1`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });
  if (resp.status === 200) {
    return resp.data
  } else {
    throw new Error()
  } 
}

//--------------POST---------------

const postFn = async (token, keyword, obj) => {
  const resp = await axios({
    method: 'post',
    url: `https://burger-queen-api-yrem.herokuapp.com/${keyword}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: obj
  });
  if (resp.status === 200) {
    return resp.data
  } else {
    throw new Error()
  }
}

//--------------PUT----------------

const updateFn = async (token, keyword, obj) => {
  const resp = await axios({
    method: 'put',
    url: `https://burger-queen-api-yrem.herokuapp.com/${keyword}/${obj._id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: obj,
  });
  if (resp.status === 200) {
    return resp.data
  } else {
    throw new Error()
  }
}

//-------------DELETE--------------

const deleteFn = async (token, keyword, obj) => {
  const resp = await axios({
    method: 'delete',
    url: `https://burger-queen-api-yrem.herokuapp.com/${keyword}/${obj._id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });
  if (resp.status === 200) {
    return resp.data
  } else {
    throw new Error()
  }
}

export { postFn, getFn, updateFn, deleteFn }