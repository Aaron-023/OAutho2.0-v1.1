// The getPayloadWithUnpackedToken module retrieves the auth token stored in memorty within the clientAuthTokenLibrary.
// The auth token is used in a GET request to obtain the payload/XML for the client.

import { clientCredentials } from "../config/clientLibrary.js"

export async function getPayloadFor(nameOfClient, authTokenOfClient){
    const identity = clientCredentials.find((key) => key.client_name === nameOfClient)
    const clientAuthEndpointUrl = identity.target(identity.brand_id)

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authTokenOfClient}`
        }
    };

    const response = await fetch(clientAuthEndpointUrl, options)

    return response
}
