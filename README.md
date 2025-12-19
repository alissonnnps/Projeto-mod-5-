API RESET composto por Node.js, Express e Sequelize (ORM) utilizando SQlite como banco de dados. 
O projeto mostra o relacionamento N:N entre Alunos e Cursos através da tabela Matrículas. 

Tecnologias utilizadas:
* Node.js
* Express 
* Sequelize 
* SQlite
* Sequelize CLI

------- Estrutura do Banco de Dados ---------- 

Aluno 
* id (PK, autoincrement)
* nome (string)
* email (string)

Curso 
* id (PK, autoincrement)
* nome (string)
* cargaHoraria (integer)
* modalidade (string)

Matricula 
* id (PK, autoincrement)
* alunoId (FK --> Alunos)
* cursoId (FK --> Cursos)
* dataMatricula (date)

------------ Dependências: ------------ 

instalar dependências:
nmp install

Instalar dependências principais: (caso necessário)
npm install express sequelize sqlite3

Inicializar o Sequelize: 
npx sequelize-cli init

-------- Criação dos Models e Migrations -------

Criar model + migration de Aluno:
npx sequelize-cli model:generate --name Aluno --attributes nome:string,email:string

Criar model + migration de Curso:
npx sequelize-cli model:generate --name Curso --attributes nome:string,cargaHoraria:integer,modalidade:string

Criar model + migration de Matricula:
npx sequelize-cli model:generate --name Matricula --attributes dataMatricula:date,alunoId:integer,cursoId:integer

---------- Executar as migrations ---------

npx sequelize-cli db:migrate
Cria automaticamente o banco SQLite e todas as tabelas.

---------- Iniciar o servidor --------------

node src/app.js

saida: 
"Servidor rodando em:"
http://localhost:3000

--------------- Rotas da API -----------------

Alunos
* GET /alunos
* GET /alunos/:id
* POST /alunos/:id
* PUT /alunos/:id
* DELETE /alunos/:id

Cursos 
* GET /cursos
* GET /cursos/:id
* POST /cursos
* PUT /cursos/:id
* DELETE /cursos/:id

Matrículas 
* POST/matriculas

(AS ROTAS FORAM TESTADAS, E ESTÁ NO ARQUIVO ACIMA COM O FINAL (PNG)) :)

Desenvolvido Por: Alisson Pereira 
