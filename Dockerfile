# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY ./source/app .

# Expose the port your Node.js application will run on
EXPOSE 4000

# Start your Node.js application
CMD ["node", "app.js"]