import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'cursosbd'
})

conexao.connect()

export default conexao