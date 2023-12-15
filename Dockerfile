## Build React for prod

# Use an official Node runtime as a parent image
FROM node:14-alpine 

# Set the working directory in the container
WORKDIR /client

#Copy files to the working directory
COPY ./ /client

#Install app dependencies
RUN npm install

# Copy the current directory contents inot the container at /client
COPY ./ /client

#Build the React app
RUN npm run build

#Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
