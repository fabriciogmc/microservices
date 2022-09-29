from flask import Flask, request
from flask import jsonify
from flask_cors import CORS
from urllib import parse, request as req


app = Flask(__name__)
CORS(app)


# This simulates service data that should come from database or
# configuration file.
cripto_service = {'operation':'/cripto', 'address':'localhost', 'port':5001, 'route':'/cripto'}
lowercase_service = {'operation':'/lower_case', 'address':'localhost', 'port':5000, 'route':'/lower_case'}
persistence_service = {'operation':'/persistence', 'address':'localhost', 'port':5004, 'route':'/add'}

service_registry = [cripto_service, lowercase_service, persistence_service]

@app.route('/api_gateway/<operation>')
def api_gateway(operation):
    for service_config in service_registry:
        if service_config['operation'] == ('/'+operation):
            parameters = { 'str_input': request.args.get('str_input')}
            url = 'http://' + service_config['address'] +':' + str(service_config['port']) + service_config['route'] 
            if ('/'+operation) == '/persistence': # Conversion to post request
                print("Persistência...")                 
                data = {'nome':parameters['str_input']}
                print(data)
                data_p = parse.urlencode(data).encode()                
                url_request = req.urlopen(url,data=data_p)
                result = url_request.read()
            else:
                url_request = req.urlopen(url+'?'+parse.urlencode(parameters))
                result = url_request.read()
            return result

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002)

