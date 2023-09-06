# Use a specific version of the node image for reproducibility
FROM node:18.16.1 AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json first to leverage Docker cache
# This ensures that npm install is only run when these files change
COPY package*.json ./

# Using the official registry to ensure stability
RUN npm set registry https://registry.npmjs.org/ 
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application for production
RUN npm run build

# Start a new stage to reduce image size
FROM node:18.16.1

# Set the working directory in the new stage
WORKDIR /usr/app

# Copy only necessary files from the previous stage
COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./

# Install only production dependencies to reduce image size
RUN npm install --production

# Metadata as defined by OCI (Open Container Initiative) spec
LABEL org.opencontainers.image.title="MvD NestJS API" \
      org.opencontainers.image.description="A Dockerized Mebel v Dom NestJS API" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.authors="TatarJesus, MxPanf <mxpanf@proton.me>"

# Expose port 8001 to be mapped by the docker daemon
EXPOSE 8001

# Define the command to run the app when the docker container starts
CMD ["npm", "run", "start:prod"]
