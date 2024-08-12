# #!/bin/bash

# SECRET_NAME="Envfile"  
# REGION="us-east-1" 

# SECRET=$(aws secretsmanager get-secret-value --secret-id Envfile --region us-east-1 --query SecretString --output text)

# if [ $? -ne 0 ]; then
#     echo "Error fetching secret"
#     exit 1
# fi

# echo -n "" > .env

# echo "${SECRET}" | jq -r 'to_entries[] | "\(.key)=\(.value)"' >> .env

# while IFS= read -r line; do
#     export "$line"
# done < .env


#!/bin/bash

# Fetch secrets from AWS Secrets Manager
aws secretsmanager get-secret-value --secret-id Envfile --query SecretString --output text > /app/.env
