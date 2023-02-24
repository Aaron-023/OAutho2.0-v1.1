# Get Auth Token then get Payload from two API endpoints 

This project uses scripts written in NodeJS to get a bearer token via an API endpoint that uses OAUTH2, the scheduler allows for multiple clients details to be retrieved. 

## scheduler.js

This script utilises various modules to successfully get, parse, save payload data to a directory for later use by third party applications.

To keep client information confidential this project is missing clientLibrary.js configuration file and the directory location for payload storage, you can simply recreated these files in order to use this project in your own code.