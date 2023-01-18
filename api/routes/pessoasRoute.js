const {Router} = require('express');
const { deletarPessoa } = require('../controllers/PessoaController');
const PessoaController = require('../controllers/PessoaController');

const router = Router( );

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaPorID);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

module.exports = router;