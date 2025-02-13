// Importing environment variables
import * as CONFIG from '../../config';
import {Decrypt} from 'root/config/Hash'

export default  async (URL,METHOD,formdata) => {
  const token =CONFIG.TOKEN;
  const decryptToken = Decrypt(token)
  // console.log('apiurl',CONFIG.API_URL +URL);
  const response = await fetch(CONFIG.API_URL +URL, {
    method: METHOD,
    headers: {
        'Authorization': `Bearer ${decryptToken}`,
    },
    body: formdata 
  });

  const responseData = await response.json();
  return responseData;
  
};
