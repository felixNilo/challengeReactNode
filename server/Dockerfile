# Use a Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server files to the container
COPY . .

# Set the environment variables
ENV MYSQL_HOST=127.0.0.1,
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=felix
ENV MYSQL_DATABASE=challengedb

# Set the command to run the server
CMD ["node", "index.js"]
