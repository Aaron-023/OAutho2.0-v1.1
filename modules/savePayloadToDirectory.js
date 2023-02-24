// this module is used to write the payload from the GET request endpoint/target to the payload directory so it's ready for use by an external application.

import fs from 'fs'

export async function unpackPayload_saveToDirectoryFor(nameOfClient, payload){

    if(payload.status == 200){
            const xmlData = await payload.text()
            fs.writeFile(`../unpackedClientPayloads/${nameOfClient}.xml`, xmlData, function(err){
                if (err){
                    throw new Error(`There was an issue saving the XML data:___ ${err.messag}`)
                }
            })
    }
}
