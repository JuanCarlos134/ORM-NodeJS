const { TurmasServices } = require('../services')
const turmasServices = new TurmasServices()

class TurmaController {
    static async pegaTodasAsTurmas(req, res) {
        const where = {}
        const { data_inicial, data_final } = req.query
        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null
        try {
            const todasAsTurmas = await turmasServices.pegaTodosOsRegistros({ where })
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params
        try {
            const pegaTurma = await turmasServices.pegaUmRegistro({ id })
            return res.status(200).json(pegaTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await turmasServices.criaUmRegistro(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params
        const novasInfosTurma = req.body
        try {
            const turmaAtualizada = await turmasServices.atualizaRegistro(novasInfosTurma, id)
            return res.status(200).json({ message: `turma ${turmaAtualizada}, foi atualizada com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params
        try {
            await turmasServices.apagaRegistro(id)
            return res.status(200).json({ mensagem: `id: ${id}, foi deletado com sucesso.` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async restauraTurma(req, res) {
        const { id } = req.params
        try {
            await turmasServices.restauraRegistro(id)
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController;
