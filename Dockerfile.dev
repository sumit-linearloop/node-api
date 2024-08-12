FROM node:18 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
RUN apt-get update && \
    apt-get install -y awscli jq && \
    apt-get clean
 
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_DEFAULT_REGION
 
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
ENV AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION}

RUN aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID} && \
    aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY} && \
    aws configure set region ${AWS_DEFAULT_REGION} && \
    aws secretsmanager get-secret-value --secret-id Envfile --region ${AWS_DEFAULT_REGION} | \
    jq -r '.SecretString | fromjson | to_entries | .[] | "\(.key)=\(.value)"' > .env && \
    cat .env 
COPY . .
EXPOSE 1400
CMD ["sh", "-c", "node -r dotenv/config index.js dotenv_config_path=.env"]
 
 
