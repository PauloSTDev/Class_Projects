FROM node:alpine
WORKDIR '/agrogp'

COPY package.json .
RUN npm install
RUN npm install @material-ui/core
RUN npm install @material-ui/icons
RUN npm install react-router-dom
RUN npm uuid
COPY . .
CMD ["npm", "start"]