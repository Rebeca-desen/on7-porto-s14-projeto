const cursos = require('../models/cursos')


const getAll = (req, res) => {
    cursos.find(function(err, cursos){
        if (err) {
     res.status(500).send('deu erro fofa')
        }
        res.status(200).send(cursos)
    })
}



const postCurso = (req, res) => {
    let curso = new cursos(req.body)
    
    curso.save(function (err){
        if (err) res.status(500).send('acho que não adicionou nada')
    })
    res.status(200).send('certinho')
}




module.exports = {
    getAll,
    postCurso
}