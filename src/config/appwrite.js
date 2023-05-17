import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);               // Your project ID

const account = new Account(client);

export { client, account };
