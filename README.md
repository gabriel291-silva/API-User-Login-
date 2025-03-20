# API-User-Login-

conteudo do Projeto 

*1. Autenticação*
- POST /register → Cadastro de usuário (name, email, password)
- POST /login → Login do usuário (retorna JWT válido)

*Gestão de Usuários*
- GET /users → Listar usuários (apenas autenticados). O CPF deve ser retornado de forma anonimizada (ex: ***.456.789-00).

*Tecnologias utlizadas* 
- Node.js
- Express.js
  TypeScript
- PostgreSQL
- Prisma
- Jest
- JWT
