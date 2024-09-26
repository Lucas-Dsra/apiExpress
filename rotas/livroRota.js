const { Router } = require ("express")
const router = Router();

const {getLivros, getSendLivroID, postLivro, patchLivro, deleteLivro} = require("../controladores/livroControlador.js")


router.get('/', getLivros)
router.post('/', postLivro)
router.get('/:id',getSendLivroID)
router.patch('/:id', patchLivro)
router.delete('/:id', deleteLivro)

module.exports = router;    