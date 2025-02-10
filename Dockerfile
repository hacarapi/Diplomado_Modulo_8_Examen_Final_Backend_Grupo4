# Usa una imagen oficial de Node.js como base
FROM node:20.11.1

# Establece el directorio de trabajo
WORKDIR /app

# Instala git para clonar el repositorio
RUN apt-get update && apt-get install -y git

# Clona el repositorio desde GitHub
RUN git clone https://github.com/hacarapi/Diplomado_Modulo_8_Examen_Final_Backend_Grupo4.git .

# Instala las dependencias del backend
RUN npm install

# Expone el puerto en el que corre el backend
EXPOSE 3000

# Comando para ejecutar el backend
CMD ["npm", "start"]
