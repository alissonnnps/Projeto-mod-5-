const express = require('express');
const { sequelize } = require('./models');

const alunosRoutes = require('./routes/alunosRoutes');
const cursosRoutes = require('./routes/cursosRoutes');
const matriculasRoutes = require('./routes/matriculasRoutes');

const app = express();
app.use(express.json());

app.use('/alunos', alunosRoutes);
app.use('/cursos', cursosRoutes);
app.use('/matriculas', matriculasRoutes);

sequelize.sync();

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

