// const express = require('express');
// const dotenv = require('dotenv'); 

// dotenv.config(); // Load environment variables first

// const app = express();
// const port = process.env.API_PORT;

// app.get('/', (req, res) => {
//     res.send('Hello DevOps ci-cd pipeline create and push kubernetes! ' + process.env.MY_ENV_NAME);
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });



// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');

// // Determine the environment and set the appropriate .env file
// const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.dev'; // Default to .env.dev

// // Load environment variables from the specified .env file
// dotenv.config({ path: path.resolve(__dirname, envFile) });

// const app = express();
// const port = process.env.API_PORT;

// app.get('/', (req, res) => {
//     res.send('Hello DevOps ci-cd pipeline create and push kubernetes! ' + process.env.MY_ENV_NAME);
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });



// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
 
// const app = express();
 
// // Determine which .env file to use based on the NODE_ENV environment variable
// const envFile = process.env.NODE_ENV === 'production' ? '.env.PROD' :
//                  process.env.NODE_ENV === 'staging' ? '.env.STAG' :
//                  '.env.DEV'; // Default to DEV environment
 
// dotenv.config({ path: path.resolve(__dirname, envFile) });
 
// // Use the PORT from the .env file, or default to 5000
// const port = process.env.API_PORT;
 
// // Middleware to parse JSON requests
// app.use(express.json());
 
// // Sample GET endpoint
// app.get('/', (req, res) => {
//     res.send('Hello DevOps from stag rep 1   deployment and services yaml file delete     !' + process.env.MY_ENV_NAME);
// });
 
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });





const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
 
const app = express();
 
const region = 'us-east-1';
const client = new SecretsManagerClient({ region });
 
async function getSecrets(secretName) {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const data = await client.send(command);
    if (data.SecretString) {
      return JSON.parse(data.SecretString);
    } else {
      console.error("Secret not in string format.");
    }
  } catch (err) {
    console.error("Error retrieving secrets:", err);
  }
  return null;
}
 
(async () => {
  const secretName = 'Envfile-stage';
  const secrets = await getSecrets(secretName);
  if (secrets) {
    Object.keys(secrets).forEach(key => {
      process.env[key] = secrets[key];
    });
  }
  const port = process.env.API_PORT;
  app.use(express.json());
 
  app.get('/', (req, res) => {
    res.send('Hello DevOps STAG branch update'            + process.env.MY_ENV_NAME);
  });
 
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();