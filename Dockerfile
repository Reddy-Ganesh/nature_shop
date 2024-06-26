# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app

CMD ["node", "index.js"]
# ganesh
