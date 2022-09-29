from flask import Flask, request
from flask import jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/lower_case')
def lower_case():
    str_input = request.args.get('str_input')
    str_output = {'lowercase_str': str.lower(str_input)}
    return jsonify(str_output)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

