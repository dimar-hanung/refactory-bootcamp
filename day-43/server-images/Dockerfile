FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
RUN echo "mulai"
ENV PORT=3000
ENV SECRET=Rahasia
ENV GMAIL_USERNAME=example@gmail.com
ENV GMAIL_PASSWORD=passwordnya123beneran
ENV DB_USERNAME=root
ENV DB_PASSWORD=dimar
ENV DB_HOST=172.19.0.2
ENV DB_NAME=rf_wms
RUN npx sequelize-cli db:migrate
RUN echo "sukses"

COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
# EXPOSE 8080
# CMD [ “node”, “app.js” ] 
