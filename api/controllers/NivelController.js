const { NiveisServices } = require('../services')
const niveisServices = new NiveisServices()

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const pegaNiveis = await niveisServices.pegaUmRegistro({ id })
      return res.status(200).json(pegaNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaNivel(req, res) {
    const novoNiveis = req.body;
    try {
      const novoNiveisCriada = await niveisServices.criaUmRegistro(novoNiveis);
      return res.status(200).json(novoNiveisCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params;
    const novasInfosNiveis = req.body;
    try {
      const niveisAtualizada = await niveisServices.atualizaRegistro(novasInfosNiveis, id)
      return res.status(200).json({ message: `nivel ${niveisAtualizada}, atualizado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await niveisServices.apagaRegistro(id);
      return res.status(200).json({ mensagem: `id: ${id}, foi deletado com sucesso.` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async restauraNivel(req, res) {
    const { id } = req.params
    try {
      await niveisServices.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
module.exports = NivelController;
