const {Router} = require('express');
const { deletarPessoa } = require('../controllers/PessoaController');
const PessoaController = require('../controllers/PessoaController');

const router = Router( );

router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaPorID)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaPorID)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)


module.exports = router;