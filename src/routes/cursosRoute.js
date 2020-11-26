const express = require("express")
const { get } = require("mongoose")
const router = express.Router()
const controller = require("../controllers/cursosController")

router.get('/', controller.getAll)
router.post('/', controller.postCurso)
router.get('/bootcamps', controller.getBootcamps)
router.get('/:id', controller.getById)
router.delete('/:id', controller.deleteById)
router.put('/:id', controller.putById)


module.exports = router