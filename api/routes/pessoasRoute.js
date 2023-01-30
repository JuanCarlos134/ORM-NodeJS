const {Router} = require('express');
const { deletarPessoa } = require('../controllers/PessoaController');
const PessoaController = require('../controllers/PessoaController');

const router = Router( );

router
.get('/pessoas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegaPorID)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaPorID)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
.post('/pessoas', PessoaController.criaPessoa)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.put('/pessoas/:id', PessoaController.atualizarPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
.delete('/pessoas/:id', PessoaController.deletaPessoa)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)


module.exports = router;