FROM node:20-alpine

WORKDIR /app

# Copiamos el backend completo
COPY backend /app

# ✅ Copiamos también el frontend
COPY frontend /app/frontend

RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]
