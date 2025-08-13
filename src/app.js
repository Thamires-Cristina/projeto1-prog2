import express from 'express'
const app = express()

// indicar para o express ler o body como json

app.use(express.json())

const cursos = [
    {id: 1, disciplina: 'ADS'},
    {id: 2, disciplina: 'ADS'},
    {id: 3, disciplina: 'ADS'},
    {id: 4, disciplina: 'ADS'}
]

//Criando uma função de buscar por Id
function buscarCursosPorId(id){
    return cursos.filter(curso => curso.id == id)
}

//Criando uma função de buscar por Id
function buscarIndexCurso(id){
    return cursos.findIndex(curso => curso.id == id)
}

// Criando uma rota default (endpoint)
app.get('/', (req, res) => {
    res.send('Hello World')
})

// // Criando uma nova rota com GET
app.get('/cursos', (req, res) => {
    res.status(200).send(cursos)
})
// Criando uma nova rota com POST
app.post('/cursos', (req, res) => {
    cursos.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})
// Criando uma variavél que busca uma informação no console
app.get('/cursos/:id', (req, res) => {
    // let index = req.params.id
    // console.log(index)
    res.json(buscarCursosPorId(req.params.id))
})

// Criando um edpoind que deleta por id
app.delete('/cursos/:id', (req, res) => {
    let index = buscarIndexCurso(req.params.id)
     cursos.splice(index,1)
     console.log(index)
     res.send(`O curso com o id ${req.params.id} excluido com sucesso`)
})

// Atualizando o Index
app.put('/cursos/:id', (req, res) => {
    let index = buscarIndexCurso(req.params.id)
     cursos [index].disciplina = req.body.disciplina
     res.json(cursos)
})

export default app

