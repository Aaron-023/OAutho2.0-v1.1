
import nodecron from 'node-cron'
import { clientCredentials } from '../config/clientLibrary.js'
import { getBearerTokenForClient } from '../modules/postRequestForAuthToken.js'
import { unpackAuthTokenFor } from '../modules/unpackageAuthToken.js'
import { getPayloadFor } from '../modules/getPayloadWithUnpackedToken.js'
import { unpackPayload_saveToDirectoryFor } from '../modules/savePayloadToDirectory.js'
import { clientAuthTokens } from '../config/clientAuthTokenLibrary.js'

// Define the cron schedule
const task = nodecron.schedule('0 5,10,21 * * 1-5', async () => {
  for (const record of clientCredentials) {
    
    const authToken = await getBearerTokenForClient(record.client_name)
    
    unpackAuthTokenFor(record.client_name, authToken)

    const payload = await getPayloadFor(record.client_name, clientAuthTokens[record.client_name])

    unpackPayload_saveToDirectoryFor(record.client_name, payload)

  }
});

task.start()