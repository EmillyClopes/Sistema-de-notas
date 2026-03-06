# Usa uma imagem estável do Node.js
FROM node:18-alpine

# diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do projeto para o container
COPY . .

# Expõe a porta que seu app
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
