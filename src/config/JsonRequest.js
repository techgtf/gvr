// Importing environment variables
import * as CONFIG from 'root/config';
import { Decrypt } from 'root/config/Hash'


export default async (URL, METHOD, formdata) => {

  const token = CONFIG.TOKEN;
  const decryptToken = Decrypt(token)



  const JsonRequest = await fetch(CONFIG.API_URL + URL, {
    method: METHOD,
    headers: {
      'Authorization': `Bearer ${decryptToken}`,
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(formdata),
    // mode: 'cors',
    changeOrigin: true,
  });

  const responseData = await JsonRequest.json();
  return responseData;

};