# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your Next.js application will run on
EXPOSE 3000

# Start your Node.js application
CMD npm run dev
