# Use a Node.js base image
FROM node:16.3.0-alpine

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the API files (assuming they are named api1.js and api2.js)
COPY backend-api.js ./backend-api.js
COPY VC.js ./VC.js
COPY Models/ ./Models/
# COPY script.sh ./script.sh

# Expose port 3000 for API 1 and port 4000 for API 2
EXPOSE 5000
EXPOSE 8000

# RUN chmod +x script.sh
# CMD ["script.sh"]
# Start API 1 on port 3000 and API 2 on port 4000
CMD ["sh", "-c", "node backend-api.js & node VC.js"]

# CMD ["node", "backend-api.js", "&", "node", "VC.js"]

# docker run -p 5000:5000 -p 8000:8000 my-multi-api-app
