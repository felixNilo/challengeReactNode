# Use a Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Set the command to run the server
CMD ["npm", "start"]
