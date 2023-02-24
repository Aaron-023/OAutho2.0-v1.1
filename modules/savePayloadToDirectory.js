// this module is used to write the payload from the GET request endpoint/target to the payload directory so it's ready for use by an external application.

import fs from 'fs'

export async function unpackPayload_saveToDirectoryFor(nameOfClient, payload){

    if(payload.status == 200){
        try {
            const xmlData = await payload.text()
            fs.writeFile(`../unpackedClientPayloads/${nameOfClient}.xml`, xmlData)

        } catch(err) {
            throw new Error('There was an issue saving the XML data: ', response.status, response.statusText, err)
        }
    }
}
