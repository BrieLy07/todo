FROM node:20-alpine

WORKDIR /app

# Copiar backend y frontend
COPY backend /app
COPY frontend /app/frontend
COPY .env /app/.env

# Instalar dependencias
RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]
