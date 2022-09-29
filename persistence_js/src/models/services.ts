import { MariaDBDataSource } from "./data_source";
import {Usuario} from "./model";

export class Service{    
    start(){       
            MariaDBDataSource.initialize().then( ()=>{
                console.log("Inicializada a fonte de dados...");
            }).catch((err)=>{
                console.error("Erro de inicialização da fonte de dados!!");
            }) 
    }
    async insert(usuario: Usuario){
        await MariaDBDataSource.manager.save(usuario);        
    }
    async listAll(){
       let list = await MariaDBDataSource.manager.find(Usuario);
       return list;
    }
}

