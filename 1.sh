#!/bin/bash

# Define the S3 bucket name and object key
S3_BUCKET="aws-cli-public"
S3_OBJECT_KEY=".env"
LOCAL_PATH="./.env"

# Download the .env file from S3 using AWS CLI
aws s3 cp "s3://${S3_BUCKET}/${S3_OBJECT_KEY}" "$LOCAL_PATH"

# Check if the download was successful
if [ $? -eq 0 ]; then
  echo ".env file downloaded successfully from s3://${S3_BUCKET}/${S3_OBJECT_KEY}"

  # Run Docker Compose
  docker-compose up --build
else
  echo "Failed to download .env file from s3://${S3_BUCKET}/${S3_OBJECT_KEY}"
  exit 1
fi


# sumit