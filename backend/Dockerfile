# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /backend

# Copy package.json and package-lock.json to the container
COPY /app/package.json ./

# Install application dependencies
RUN yarn

# Expose the port your Node.js application will run on
EXPOSE 4000

# Start your Node.js application
CMD ["yarn", "start"]
