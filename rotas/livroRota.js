const { Router } = require ("express")
const router = Router();

const {getLivros, pushLivros, getSendLivroID, postLivro, patchLivro} = require("../controladores/livroControlador.js")


router.get('/', getLivros)
router.post('/', postLivro)
router.get('/:id',getSendLivroID)
router.patch('/:id', patchLivro)

module.exports = router;    