# Fetching Auth Bearer Token from API

(Credentials branch)

These scripts written in NodeJS acquire a bearer token via an API POST request using a client secret. 

## getBearerToken.js
This script submits a client secret and obtains a bearer token, the token is then saved externally for later use.


## getXmlData.js
This script uses the retrieved bearer token and submits it to the API using a GET method, the XML payload is saved to a file ready for use by an external application.

# Updates 

This is a version 1.1 of a previous project in this repo, after considering how this app will be used with multiple users, it was decided to refactor the code to ensure easier maintenance and increased robustness. There are more updates to come. 