// this module is used to write the payload from the GET request endpoint/target to the payload directory so it's ready for use by an external application. 

import fs from 'fs'
import { getMethod } from '../config/clientCredentials.js'

export async function writePayload(response){

    if(response.status == 200){
        console.log('SUCCESS: ', response)
        const data = await response.text()
        
        fs.writeFile(`../payloads/${getMethod.client_name}.xml`, data, (err) => {
            if (err) { throw err }
        })
        } else {
            console.log('Not successful', response.status, response.statusText)
        }
}
