# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@next-8
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the desired port
EXPOSE 4173

# Start the application
CMD [ "npm", "run", "preview"]
