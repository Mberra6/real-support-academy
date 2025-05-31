# Use the official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port your Express app runs on
EXPOSE 3333

# Start the server
CMD ["node", "server.js"]
