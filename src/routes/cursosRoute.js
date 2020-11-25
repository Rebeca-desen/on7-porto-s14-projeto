const express = require("express")
const { get } = require("mongoose")
const router = express.Router()
const controller = require("../controllers/cursosController")

router.get('/', controller.getAll)
router.post('/', controller.postCurso)


module.exports = router