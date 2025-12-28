# 🩺 Sistema de Agendamento de Consultas

Aplicação **fullstack** para gerenciamento de consultas médicas, construída com **Node.js (Express + Prisma)** no back-end e **Next.js 13 + Zustand** no front-end.

O sistema permite que usuários se registrem, façam login, agendem consultas e visualizem suas consultas futuras.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Back-end
- Node.js
- Express
- Prisma ORM
- JWT (JSON Web Token)
- Middleware de autenticação

### 🎨 Front-end
- Next.js 13 (App Router)
- React
- Zustand (gerenciamento de estado)
- Zod (validação de formulários)
- TailwindCSS
- shadcn/ui

### 🗄️ Banco de Dados
- PostgreSQL (ou outro banco suportado pelo Prisma)

---

## ⚙️ Funcionalidades
- Registro de usuário
- Login com JWT
- Armazenamento seguro do token em **cookies httpOnly**
- Estado global de autenticação com **Zustand**
- Agendamento de consultas
- Listagem de consultas do usuário
- Logout com limpeza de cookies e estado global

---

## 📂 Estrutura do Projeto

/backend
├── src
│ ├── routes
│ ├── middleware
│ ├── prisma
│ └── server.ts

/frontend
├── app
│ ├── login
│ ├── register
│ ├── consultas
│ └── components
├── store
└── actions

---

## 🔑 Autenticação
- O usuário faz login e recebe um **JWT**.
- O token é salvo em **cookie httpOnly** e também no **Zustand** para controle da UI.
- Um middleware no back-end valida o token em todas as rotas protegidas.

---

## ▶️ Como Rodar o Projeto

### Back-end
```bash

npm install
npx prisma migrate dev
npm run backend

```

### Front-end
```bash

npm install
npm run dev

```


📌 Rotas Principais
Back-end

POST /register → cria novo usuário

POST /login → autentica usuário e retorna token

GET /appointments → lista consultas do usuário autenticado

POST /appointments → cria nova consulta

DELETE /appointments/:id → exclui consulta

Front-end

/register → formulário de cadastro

/login → formulário de login

/appointments → agendamento de consulta

/Allappointments → listagem de consultas


👨‍💻 Autor

Projeto desenvolvido por Leonardo 🚀

