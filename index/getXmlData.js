// This script utilises modules to retrieve the payload from the endpoint, then write the payload data to a json file so it's ready to use by an external application.


import nodecron from 'node-cron'
import fs from 'fs'
import { fetchPayload } from '../modules/fetchPayload.js'
import { writePayload } from '../modules/writePayload.js'

async function getPayload() {
    const response = await fetchPayload()
    writePayload(response)
    
}

// nodecron.schedule('15,45 0-23 * * 1-5', () => {
    getPayload()
// })