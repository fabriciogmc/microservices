/*
Exemplo simples de um serviço web para inserção e listagem de dados em um
SGBD relacional, utilizando typeORM.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

/* Em uma mesma máquina, aplicações web diferentes devem ser executadas
em portas diferentes.*/
const port = 5004;

/* importando o modelo */
import { Usuario} from "./models/model"
/* importanto o data source inicializado */
import { Service} from "./models/services"



/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));
/* Habilitação de requisições partindo de outras aplicações */
app.use(cors({
    oringin: '*',
    credentials: true
})); 

/* Inicializando a fonte de dados via serviço: */
var service = new Service();
service.start();

/* Criação das rotas para o serviço. */
app.get('/list', listProjectHandler);
app.post('/add', addProjectHandler);

/* Execução do servidor */
app.listen(port, listenHandler);

/* Tratadores de requisição */

/* Tratador de listagem */
async function listProjectHandler(req, res){ 
    console.log("Requisição de listagem recebida."); //Para debug somente.
    let usuarios = await service.listAll();  
    let usr_list = JSON.stringify(usuarios);
    res.setHeader('Content-Type', 'application/json');
    res.end(usr_list);     
}

/* Tratador de adição */
async function addProjectHandler(req,res){
    console.log("Requisição de inserção recebida.."); // Para debug somente.
    let novo_usuario = new Usuario();  
    for(let key in req.body){
        novo_usuario[key] = req.body[key];
    } 
    await service.insert(novo_usuario);
    let novo_usuario_i = JSON.stringify(novo_usuario);
    res.setHeader('Content-Type', 'application/json');
    res.end(novo_usuario_i);     
}


function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}