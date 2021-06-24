const axios = require('axios');

export const usersRequest = async () => {
      const resp = await axios.get('http://localhost:3001/users');
      // console.log(resp.data)
      return resp.data
  
}
