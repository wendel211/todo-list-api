# Imagem base (Node 18 LTS)
FROM node:18

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json primeiro (para cache)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
