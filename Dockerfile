FROM node:21-alpine

LABEL authors="arpit"

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

# Copy app source code
COPY . .

# Install npm modules
RUN npm install

COPY ./.env ./build

# Expose port
EXPOSE 3333

# Start app
CMD ["node ace serve"]
