# 📝 Todo App - Node.js + Docker + EC2

Aplicación web simple de notas/tareas, accesible desde navegador web o móvil.  
Desarrollada en Node.js + Express con SQLite, frontend básico, y desplegada en AWS EC2 usando Docker y NGINX.

---

## 🚀 Tecnologías utilizadas

- Backend: Node.js (Express)
- Base de datos: SQLite
- Frontend: HTML + JS (estático)
- Proxy: NGINX (puerto 80)
- Contenedores: Docker + Docker Compose
- Cloud: AWS EC2 (Amazon Linux)

---

## 📁 Estructura del proyecto

todo/
├── backend/
│ ├── server.js
│ ├── database.js
│ ├── package.json
│ └── routes/
│ └── notes.js
├── frontend/
│ ├── index.html
│ └── script.js
├── nginx.conf
├── Dockerfile
├── docker-compose.yml
└── README.md

---

## 🔑 Acceso SSH a EC2

1. Descargar la clave privada: `todo-test-key.pem`
2. Darle permisos seguros:

```bash
chmod 400 todo-test-key.pem

ssh -i todo-test-key.pem ec2-user@<IP_PUBLICA_EC2>

## 🔑 Subir archivos a servidor

scp -i todo-test-key.pem -r ./todo ec2-user@<IP_PUBLICA_EC2>:~/

## Comandos de despliegue en EC2

cd ~/todo
docker-compose down -v --remove-orphans
docker-compose up --build -d

## Ver contenedores

docker ps

## Acceder desde navegador

http://<IP_PUBLICA_EC2>

## Grupo de seguridad EC2 

Asegúrate de tener abiertos estos puertos:

22 (SSH)

80 (HTTP)

## ✅ Estado final
App funcionando desde cualquier navegador

Contenedores gestionados por Docker Compose

Base de datos SQLite persistente dentro del contenedor

