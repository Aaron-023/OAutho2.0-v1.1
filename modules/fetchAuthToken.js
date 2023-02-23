// This fetchAuthToken module pulls the client_name from the clientCredentials module.
// It uses the client_name as reference for client credentials to complete POST request. 
// It posts a request to the OAuth API and converts the response to json.
// It passes the response to processAuthToken() function in the writeAuthToken module.

import { authURL, clientCredentialsList } from '../config/clientCredentials.js'

export async function processClient(clientName) {
  const credentials = clientCredentialsList.find((item) => item.client_name === clientName)
  
  const postData = new URLSearchParams({
    client_id: credentials.client_id,
    client_secret: credentials.client_secret,
    grant_type: credentials.grant_type
  });

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'cache-control': 'no-cache'
  },
  body: postData
};

  const response = await fetch(authURL, options);
  if (response.status === 200) {
    const data = await response.json();
    console.log(response.statusText, response.status)
      return data
  } else {
    console.log("Error Occurred while Fetching Auth Token:", response.statusText, response.status);
  }
}

export default { processClient }