# 🚀 API RESTful com Node.js, MongoDB, TypeScript e JWT

Esta é uma API construída com Node.js, MongoDB e TypeScript, estruturada com boas práticas como camadas de serviço e repositório, autenticação JWT, validação com Joi e documentação interativa com Swagger.

> 🧠 Projeto desenvolvido como parte do meu processo de expansão técnica para além do ecossistema .NET.

---

## 📁 Estrutura do Projeto

```
src/
├── api/controllers       # Endpoints da aplicação
├── config                # Configuração do banco e Swagger
├── middlewares           # Autenticação e validação
├── models                # Schemas do MongoDB com Mongoose
├── repositories          # Acesso ao banco
├── services              # Regras de negócio
├── validations           # Schemas de validação com Joi
├── app.ts                # Configuração da aplicação Express
└── server.ts             # Inicialização do servidor
```

---

## ⚙️ Tecnologias Utilizadas

- **Node.js + Express**
- **TypeScript**
- **MongoDB + Mongoose**
- **Joi** (validação de dados)
- **JWT** (autenticação)
- **Swagger** (documentação de API)
- **BcryptJS** (criptografia de senha)
- **Helmet + Cors + Morgan** (segurança e log)

---

## 🚧 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login com retorno de token JWT
- ✅ Listagem de usuários (rota protegida)
- ✅ Validação de dados com Joi
- ✅ Documentação interativa com Swagger
- ✅ Middleware de autenticação e validação

---

## 🛡️ Autenticação JWT

Após fazer login, use o token retornado para acessar rotas protegidas.  
No Swagger, clique em 🔐 “Authorize” e insira:

```
Bearer seu_token_jwt_aqui
```

---

## 🔍 Swagger

Acesse a documentação interativa:

```
http://localhost:3000/api-docs
```

> Contém todos os endpoints, modelos de dados e opção de testar diretamente pelo navegador.

---

## 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/sua-api-node.git

# 2. Instale as dependências
npm install

# 3. Configure o .env
cp .env.example .env
```

---

## 🔐 Exemplo de `.env`

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/seu_banco
JWT_SECRET=sua_chave_secreta_jwt
```

---

## ▶️ Execução

```bash
# Em modo desenvolvimento
npm run dev
```

---

## 🧠 Aprendizados

Este projeto foi criado com base em uma demanda real no ambiente profissional, o que reforçou:

- A importância de uma **estrutura clara e escalável**
- A praticidade do ecossistema **Node.js**
- O poder da **documentação e validação automática**
- Como boas práticas se mantêm **independentemente da linguagem ou tecnologia**

---

## 🤝 Contato

Caso queira trocar ideias sobre o projeto ou tecnologias backend:

**Guilherme Borges**  
📧 r15.thiagomarques@gmail.com
🔗 [LinkedIn](www.linkedin.com/in/thiago-marques-sousa-b22627152)  
🐙 [GitHub](https://github.com/thiagomars)
