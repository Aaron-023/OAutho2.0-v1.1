import { postMethod, postMethodHeader, postMethodBody } from '../../app/config/clientCredentials.js'
import querystring from 'querystring'

const postData = querystring.stringify({
  client_id: postMethodBody.client_id,
  client_secret: postMethodBody.client_secret,
  grant_type: postMethodBody.client_grant_type
});

const options = {
  method: postMethodHeader.post,
  headers: {
    'Content-Type': postMethodHeader.content_type,
    'cache-control': postMethodHeader.cache_control
  },
  body: postData
};

export async function fetchAuthToken() {
  const response = await fetch(postMethod.endpoint, options);
  if (response.status === 200) {
      const data = await response.json();
      console.log(response.statusText, response.status, data)
      return data
  } else {
    console.log("Error Occurred while Fetching Auth Token:", response.statusText, response.status);
  }
}