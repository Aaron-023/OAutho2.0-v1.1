// this modules is used to write the result of the fetchAuthToken module (the bearer token) to a file for later use in a get request.

import fs from 'fs'
import { getMethod } from "../../app/config/clientCredentials.js";

export async function writeAuthToken(data) {
    fs.writeFile(`../config/${getMethod.client_name}-bearer-token.json`, `${JSON.stringify(data)}`, (err) => {
        console.log('Auth Token Acquired!'); 
        
        if (err) { throw console.log("There was a problem retrieving the authentication token: ", err); }
        
    })  
}