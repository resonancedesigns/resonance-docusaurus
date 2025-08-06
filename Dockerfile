# Use the official lightweight Node.js image.
FROM node:alpine

# Install pnpm tsx globally
RUN npm install -g pnpm tsx

# Create and change to the app directory.
WORKDIR /workspace

# Copy the source code into the container.
COPY . ./

# Expose port 3000
EXPOSE 3000

# Run the web service on container startup.
CMD ["sh", "-c", "pnpm install && pnpm start"]
