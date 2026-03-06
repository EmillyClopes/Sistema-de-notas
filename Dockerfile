# Usa uma imagem estável do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do seu projeto
COPY . .

# Expõe a porta que seu app usa (ajuste se não for 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
