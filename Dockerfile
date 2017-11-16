FROM node:6
ENV INSTALL_PATH /oneform-client
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install
CMD ["npm", "start"]