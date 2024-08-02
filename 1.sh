# #!/bin/bash

# # Define the S3 bucket name and object key
# S3_BUCKET="aws-cli-env"
# S3_OBJECT_KEY="DEV.env"
# S3_OBJECT_KEY="STAG.env"
# S3_OBJECT_KEY="PROD.env"
# LOCAL_PATH="./.env"

# # Download the .env file from S3 using AWS CLI
# aws s3 cp "s3://${S3_BUCKET}/${S3_OBJECT_KEY}" "$LOCAL_PATH"

# # Check if the download was successful
# if [ $? -eq 0 ]; then
#   echo ".env file downloaded successfully from s3://${S3_BUCKET}/${S3_OBJECT_KEY}"

#   # Run Docker Compose
#   docker-compose up 
# else
#   echo "Failed to download .env file from s3://${S3_BUCKET}/${S3_OBJECT_KEY}"
#   exit 1
# fi


#!/bin/bash

# # Check if an environment argument is provided
# if [ -z "$1" ]; then
#   echo "Usage: $0 <ENVIRONMENT>"
#   echo "Example: $0 DEV"
#   exit 1
# fi

# # Define the S3 bucket name and set the S3 object key based on the argument
# S3_BUCKET="aws-cli-env"
# ENVIRONMENT=$1
# S3_OBJECT_KEY="${ENVIRONMENT}.env"
# LOCAL_PATH="./.env"

# # Download the .env file from S3 using AWS CLI
# echo "Downloading ${S3_OBJECT_KEY} from S3 bucket ${S3_BUCKET}..."
# aws s3 cp "s3://${S3_BUCKET}/${S3_OBJECT_KEY}" "$LOCAL_PATH"

# # Check if the download was successful
# if [ $? -eq 0 ]; then
#   echo ".env file downloaded successfully from s3://${S3_BUCKET}/${S3_OBJECT_KEY}"

#   # Run Docker Compose
#   docker-compose up --build
# else
#   echo "Failed to download .env file from s3://${S3_BUCKET}/${S3_OBJECT_KEY}"
#   exit 1
# fi



# #!/bin/bash

# # Download the .env file from S3
# aws s3 cp s3://dmakindia/env/.env.DEV /usr/src/app/.env.DEV

# # Start the Node.js application
# cmd node index.js

#!/bin/sh

# #!/bin/bash

# Fetch secrets from AWS Secrets Manager
aws secretsmanager get-secret-value --secret-id E --region us-west-2 --query SecretString --output text | jq -r 'to_entries|map("\(.key)=\(.value|tostring)")|.[]' > /secrets/env-file

# Export the environment variables
export $(cat /secrets/env-file | xargs)

# Execute the command
exec "$@"
