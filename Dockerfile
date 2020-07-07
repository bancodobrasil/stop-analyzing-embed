FROM lucasravy/local-web-server-alpine:0.0.1

# Make a temporary directory for work on dependencies and build
RUN mkdir temp

# Copy all the necessary files to build the application to the temporary directory
COPY app temp

# Install all the dependencies and run react-scripts build command &&
# Copy build directory files to the app directory &&
# Copy the builded files at the react-scripts command to the app directory &&
# Remove the temporary directory
RUN cd temp && npm install && npm run build && cp -R build/. ../. && rm -rf ../temp

# Start local-web-service exposing the app directory
CMD ["ws", "--port 8000"]