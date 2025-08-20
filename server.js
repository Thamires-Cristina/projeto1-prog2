import app from "./src/app.js"

//import conexao from "./infra/conexao.js"

const port = 3000

// conexao.connect((error) => {
//     if (error) {
//         console.log(" Erro na conexão:", error);
//     } else {
//         console.log("Conexão realizada com sucesso!");
//         // Listening (Escutando)
//         app.listen(port, () => {
//             console.log(`Servidor da Thamires rodando em http://localhost:${port}`);
//         });
//     }
// });
//console.log("Conexão realizada com sucesso!");

        // Listening (Escutando)
        app.listen(port, () => {
            console.log(`Servidor da Thamires rodando em http://localhost:${port}`);
        })

