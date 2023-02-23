// This index file uses the modules from fetchAuthToken and writeAuthToken.
// It uses the processClient function to post a request to the OAuth API.
// It uses the processAuthToken function to write the bearer token to the clientAuthToken object.
// The clientAuthToken object is within the clientAuthTokens module.

import { processClient } from '../modules/fetchAuthToken.js'
import { processAuthToken } from '../modules/writeAuthToken.js'

async function start(clientName) {
  const data = await processClient(clientName)
  processAuthToken(clientName, data)
}

// The start function argument will be refactored to use the scheduler.js index file.
start("Burger_King")
