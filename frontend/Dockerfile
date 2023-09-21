# Use an official Node.js runtime as the base image
FROM node:16.3.0-alpine

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the frontend application (replace with your build command if needed)
# 

# Expose the port the application will run on
EXPOSE 3001

# Define the command to start your application
CMD ["npm", "start"]
