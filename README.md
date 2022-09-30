# Exemplos de Microsserviços com API Gateway

#Autor: Fabrício Galende Marques de Carvalho

Instruções de execução:

1. O API Gateway, os serviços de persistência, criptografia de lowercase de string devem ser executados antes de se executar a aplicação (app). Cada um desses seviços deve ser executado em uma porta diferente (checar). Adicionalmente, o API gateway está configurado para solicitar dados ao servidor de dados em JavaScript (persistence_js).
1. Para executar o serviço de dados, você deve ter instalado o banco de dados MariaDB, na porta 3306 (verificar a configuração).
1. Para executar os serviços em Python, para cada projeto, crie um ambiente virtual e instale as dependências:
```console
virtualenv env
cd env/Scripts
activate
cd ../..
pip install -r requirements.txt
python nome_do_arquivo.py
```
4. Executar, por último, o projeto app. Acessar o link da aplicação e verificar se os microsserviços estão sendo invocados (transformação para lower case, criptografia e persistência de dados.). Sempre aguardar um pouco a resposta por causa da latência.






