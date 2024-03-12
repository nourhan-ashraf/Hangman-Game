#instruction or layers
FROM node:alpine 

#declares an argument named ENVIRONMENT, which can be passed during the Docker build process
#ARG ENVIRONMENT

#sets the working directory
WORKDIR /app

COPY package*.json ./

RUN npm install

#It copies the entire project (docker build) into the Docker image
COPY  . .

#sets the environment variable
RUN npm run build

#GCR provides a secure and reliable way to host Docker images