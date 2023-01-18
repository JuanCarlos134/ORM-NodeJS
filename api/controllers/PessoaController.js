const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaPorID(req, res) {
        const { id } = req.params;
        try {
            const pegaId = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pegaId);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criaPessoa(req, res){
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarPessoa(req, res){
        const { id } = req.params;
        const novasInfos = req.body;
        
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deletaPessoa(req, res){
        const {id} = req.params;
        try {
            await database.Pessoas.destroy({ where: {id: Number(id) } })
            return res.status(200).json({ mensagem:`id: ${id}, foi deletado com sucesso.` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController;