# Usar una imagen oficial de Node.js
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de la aplicación
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]