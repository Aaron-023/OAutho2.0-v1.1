// This writeAuthToken module writes the bearer token value to the clientAuthToken Object in the clientAuthTokens module.
// It uses the clientName param in the processAuthToken function as the key for token storage in the clientAuthToken object
// It uses the data param in the processAuthToken function to pass the response data from the fetchAuthToken module to the tokenData variable.
// It uses data.access_token to reference the bearer token value passed in from the fetchAuthToken module.



import clientAuthToken from "../config/clientAuthTokens.js"

export async function processAuthToken(clientName, data) {
    try {
        const tokenData = await data.access_token

        // Uncomment line below to view the tokenData variable in the console 
        // console.log(`The ${clientName} token is: ${tokenData}`)
        
        // write the bearer access_token value to the clientAuthToken object.
        clientAuthToken[clientName] = tokenData;

        // Uncomment line below to view all the tokens in the clientAuthToken object.
        // console.dir(clientAuthToken)

    } catch(err) {
        throw new Error(`There was a problem retrieving the authentication token: ${err}`)
    }
}