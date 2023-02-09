// This script utilises the modules to retrieve the bearer token from the auth endpoint, then write the contents to a json file for use in another function, getXmlData.js.

import nodecron from 'node-cron'
import { fetchAuthToken } from '../modules/fetchAuthToken.js'
import { writeAuthToken } from '../modules/writeAuthToken.js'

async function processAuthToken() {
  const data = await fetchAuthToken()
  writeAuthToken(data)
}

// nodecron.schedule('0,30 0-23 * * 1-5', () => {
  processAuthToken()
// })