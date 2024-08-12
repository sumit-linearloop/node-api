# #!/bin/bash

# SECRET_NAME="Envfile"

# SECRET=$(aws secretsmanager get-secret-value --secret-id "$SECRET_NAME" --query SecretString --output text)

# if [ -z "$SECRET" ]; then
#   echo "Failed to retrieve secret from AWS Secrets Manager"
#   exit 1
# fi

# echo "$SECRET" > .env

#!/bin/bash
aws secretsmanager get-secret-value --secret-id Envfile --region us-west-1 --query 'SecretString' --output text > .env

export $(grep -v '^#' .env | xargs)

node index.js