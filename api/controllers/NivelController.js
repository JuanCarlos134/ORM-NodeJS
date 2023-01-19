//controllers/NivelController.js

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    static async pegaUmNivel(req, res) {
      const { id } = req.params;
      try {
          const pegaNiveis = await database.Niveis.findOne({ where: { id: Number(id) } });
          return res.status(200).json(pegaNiveis);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }
  static async criaNivel(req, res){
      const novoNiveis = req.body;
      try {
          const novoNiveisCriada = await database.Niveis.create(novoNiveis);
          return res.status(200).json(novoNiveisCriada);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }
  static async atualizaNivel(req, res){
      const { id } = req.params;
      const novosInfosNiveis = req.body;
      try {
          await database.Niveiss.update(novosInfosNiveis, { where: { id: Number(id) } });
          const niveisAtualizada = await database.Niveis.findOne({ where: { id: Number(id) } });
          return res.status(200).json(niveisAtualizada)
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }
  static async apagaNivel(req, res){
      const {id} = req.params;
      try {
          await database.Niveis.destroy({ where: {id: Number(id) } })
          return res.status(200).json({ mensagem:`id: ${id}, foi deletado com sucesso.` })
      } catch (error) {
          res.status(500).json(error.message)
      }
  }
}
module.exports = NivelController;
  