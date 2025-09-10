# 📝 Todo List API

API simples de gerenciamento de tarefas (**CRUD**) construída com **Node.js, Express e Jest**.  
O projeto tem foco em aprendizado de **backend com Express**, **testes automatizados com Jest + Supertest** e **boas práticas com Docker e CI/CD**.

---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Jest](https://jestjs.io/)  
- [Supertest](https://github.com/ladjs/supertest)  
- [Nodemon](https://nodemon.io/)  

---

## 📂 Estrutura do projeto

```
todo-list-api/
├── src/
│   ├── index.js                    # servidor Express
│   ├── routes/
│   │   └── tasks.js                # rotas de tarefas
│   └── controllers/
│       └── tasksController.js      # lógica do CRUD
├── tests/
│   └── tasks.test.js               # testes automatizados
├── package.json
└── README.md
```

---

## ⚙️ Instalação e uso

### 1. Clonar o repositório
```bash
git clone https://github.com/wendel211/todo-list-api.git
cd todo-list-api
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar servidor em desenvolvimento
```bash
npm run dev
```

O servidor ficará disponível em: `http://localhost:3000`

---

## 📌 Endpoints

### ➤ Listar tarefas
```
GET /tasks
```

**Resposta:**
```json
[]
```

### ➤ Criar tarefa
```
POST /tasks
Content-Type: application/json

{
  "title": "Estudar Jest"
}
```

**Resposta:**
```json
{
  "id": 1,
  "title": "Estudar Jest",
  "done": false
}
```

### ➤ Atualizar tarefa
```
PUT /tasks/1
Content-Type: application/json

{
  "done": true
}
```

**Resposta:**
```json
{
  "id": 1,
  "title": "Estudar Jest",
  "done": true
}
```

### ➤ Excluir tarefa
```
DELETE /tasks/1
```

**Resposta:** `204 No Content`

---

## ✅ Testes automatizados

O projeto utiliza **Jest + Supertest** para testar as rotas automaticamente.

### Rodar testes
```bash
npm test
```

### O que é testado:
- Listagem de tarefas (GET /tasks)
- Criação de tarefa (POST /tasks)
- Atualização de tarefa (PUT /tasks/:id)
- Exclusão de tarefa (DELETE /tasks/:id)
- Erro ao atualizar tarefa inexistente (404)

---

## 🧹 Qualidade de código

O projeto utiliza:
- **ESLint** → checagem de boas práticas
- **Prettier** → formatação automática
- **Husky + Lint-Staged** → validação de código antes dos commits

### Rodar lint manualmente:
```bash
npm run lint
```

### Corrigir formatação automaticamente:
```bash
npm run format
```

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.
