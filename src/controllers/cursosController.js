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

const deleteById = (req, res) => {
    const id = req.params.id

    cursos.find({id}, function (err,curso) {
        if (curso.length > 0) {
        cursos.deleteMany({id}, function(err){
            if (err){res.status(500).send('tem algo errado ai')}
        
            res.status(200).send({
                "status": true,
                "mensagem": "Curso excluído com sucesso"
                })
        })
        
        }
        else{ res.status(500).send('algo de errado não esta certo')}
    })
}

const putById = (req, res) => {
    const id = req.params.id

    cursos.find({id}, function(err, curso) {
        if( curso.length> 0 ) {
            cursos.updateMany({ id }, { $set: req.body }, function (err){
                if(err){
                    res.status(500).send('ve isso ai')
                }
                else { res.status(200).send(
                    {
                        "status": true,
                        "mensagem": "Cursos atualizados com sucesso"
                        })
                }
            })
        }
        else{  res.status(200).send('esse registro não existe')}
    })

}

module.exports = {
    getAll,
    postCurso,
    getById,
    getBootcamps,
    deleteById,
    putById
}