from flask import Flask, request
from flask import jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/cripto')
def cesar_cripto_k3():
    str_input = request.args.get('str_input')
    k = 3 #key
    str_out =''
    for s in str_input:
        str_out = str_out + chr(ord(s)+ 3)
    str_output = {'cripto_str': str_out}
    return jsonify(str_output)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)

