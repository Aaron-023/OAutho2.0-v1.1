// This unpackageAuthToken module writes the auth token to memory in the clientAuthTokenLibrary.
// It uses the nameOfClient in the unpackAuthTokenFor function as the identifier for token retrieval from the clientAuthTokenLibrary.
// It uses tokenData to pass the response from postRequestforAuthToken module.
// It uses tokenData.access_token to reference the auth token value.

import { clientAuthTokens } from "../config/clientAuthTokenLibrary.js"

export async function unpackAuthTokenFor(nameOfClient, tokenData) {
    try {
        const openAuthToken = await tokenData.access_token
        
        // the unpacked auth token is written in memory to 
        clientAuthTokens[nameOfClient] = openAuthToken

        // Uncomment line below to view the tokenData variable in the console 
        // console.log(`The ${nameOfClient} token is: ${openAuthToken}`)
        
        // write the bearer access_token value to the clientAuthToken object.
        // clientAuthToken[clientName] = tokenData;

        // Uncomment line below to view all the tokens in the clientAuthToken object.
        // console.dir(clientAuthToken)
        
    } catch(err) {
        throw new Error(`There was a problem retrieving the authentication token: ${err}`)
    }
}