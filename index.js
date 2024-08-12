
const express = require('express');
const dotenv = require('dotenv'); 

dotenv.config(); // Load environment variables first

const app = express();
const port = process.env.API_PORT || 3000; // Added `||` to provide a default value

app.get('/', (req, res) => {
    res.send('Hello DevOps CI/CD pipeline create and push to Kubernetes!');
}); // Closing parenthesis added here

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



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
//     res.send('Hello DevOps! hello dev branch add' + process.env.MY_ENV_NAME);
// });
 
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
// const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
 
// const app = express();
 
// const region = 'us-east-1';
// const client = new SecretsManagerClient({ region });
 
// async function getSecrets(secretName) {
//   try {
//     const command = new GetSecretValueCommand({ SecretId: secretName });
//     const data = await client.send(command);
//     if (data.SecretString) {
//       return JSON.parse(data.SecretString);
//     } else {
//       console.error("Secret not in string format.");
//     }
//   } catch (err) {
//     console.error("Error retrieving secrets:", err);
//   }
//   return null;
// }
 
// (async () => {
//   const secretName = 'Envfile';
//   const secrets = await getSecrets(secretName);
//   if (secrets) {
//     Object.keys(secrets).forEach(key => {
//       process.env[key] = secrets[key];
//     });
//   }
 
//   const port = process.env.API_PORT; // Default to port 3000 if API_PORT is not set
//   if (!port) {
//     console.error('API_PORT environment variable is not set.');
//     process.exit(1);
//   }
 
//   app.use(express.json());
 
//   app.get('/', (req, res) => {
//     res.send('Hello DevOps  12ka4   s '  + process.env.MY_ENV_NAME);
//   });
 
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// })();