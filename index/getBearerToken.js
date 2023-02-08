// This script acquires the auth token from the endpoint
// using the imported credentials. 
// The auth token is exported to ./bearer-token.js

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