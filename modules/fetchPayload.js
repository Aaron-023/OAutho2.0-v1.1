// this module is used to acquire the payload from the GET request endpoint/target. 
import fs from 'fs'
let bToken

export async function fetchPayload(){
    bToken = JSON.parse(fs.readFileSync(`../config/${getMethod.client_name}-bearer-token.json`))

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${bToken.access_token}`
        }
    };
    const response = await fetch(getMethod.target, options)
    
    return response
}