# Usa l'immagine ufficiale di Node.js come base
FROM node:18.1.0-alpine

# Imposta la directory di lavoro nell'immagine Docker
WORKDIR /usr/src/

# Copia il file package.json e package-lock.json nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze del progetto
RUN npm install

# Copia il resto dei file dell'applicazione nella directory di lavoro
COPY . .

# Espone la porta su cui l'applicazione ascolta
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "index.js"]