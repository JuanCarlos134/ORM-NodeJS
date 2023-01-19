class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            const pegaTurma = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pegaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criaTurma(req, res){
        const novaTurma = req.body;
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizaTurma(req, res){
        const { id } = req.params;
        const novasInfosTurma = req.body;
        
        try {
            await database.Turmas.update(novasInfosTurma, { where: { id: Number(id) } });
            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async apagaTurma(req, res){
        const {id} = req.params;
        try {
            await database.Turmas.destroy({ where: {id: Number(id) } })
            return res.status(200).json({ mensagem:`id: ${id}, foi deletado com sucesso.` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
module.exports = TurmaController;
