// This postRequestForAuthToken module pulls the client_name from the clientLibrary module.
// It uses the nameOfClient as reference for client credentials to form the POST request. 
// It POSTs the request to the authPostEndPoint then converts the response to json format.
// It returns the response to to the function that called it.

import { clientCredentials, authPostEndpoint } from '../config/clientLibrary.js'

export async function getBearerTokenForClient(nameOfClient) {
  const identity = clientCredentials.find((key) => key.client_name === nameOfClient)
  
  const postData = new URLSearchParams({
    client_id: identity.client_id,
    client_secret: identity.client_secret,
    grant_type: identity.grant_type
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'cache-control': 'no-cache'
    },
    body: postData
  };

  const response = await fetch(authPostEndpoint, options);
  
  if (response.status === 200) {
    const data = await response.json()
    console.log(response.statusText)

    return data
      
  } else {
      console.log("Error Occurred while Fetching Auth Token:", response.statusText, response.status);
  }
}