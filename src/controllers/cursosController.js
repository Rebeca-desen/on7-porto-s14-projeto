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
    res.status(200).send({
        "status": true,
        "mensagem": "Curso incluido com sucesso"
        })
}

const getById = (req, res) => {
    const id = req.params.id
  
    cursos.find({id}, function (err, curso){
        if (err) res.status(500).send('ai fofa, deu ruim')

        else{
        res.status(200).send(curso)}
    })
}

const getBootcamps = (req, res) => {
const bootcamp = req.params.bootcamp
    cursos.find({bootcamp: true}, function(err, curso){
     if (err) res.status(500).send('errrrou')
     else{ res.status(200).send(curso)}
    })
}

module.exports = {
    getAll,
    postCurso,
    getById,
    getBootcamps
}