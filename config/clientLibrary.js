// This configuration file is holds client credentials and target/endpoint URLs.
// It is used by the fetchAuthToken module to reference client data and authURL endpoint.


export function targetUrl(brand_id){
    return `https://exampleURL/{brand_id}.com`;
}

export const authPostEndpoint = 'https://oauthendpointexample.com'

export const clientCredentials = [
  {
    client_name: String,
    client_id: String,
    client_secret: String,
    grant_type: String,
    brand_id: Number,
    target: targetUrl
  }
];