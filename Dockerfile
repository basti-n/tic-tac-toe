FROM node:14.12.0-alpine3.12
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN npm i pm2 -g
RUN adduser --disabled-password app
COPY api/ .
RUN chown -R app:app /opt/app
USER app
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "pm2" ]