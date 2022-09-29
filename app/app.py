from flask import Flask, request, render_template
from flask import jsonify
from flask_cors import CORS
from urllib import parse, request as req


app = Flask(__name__)
CORS(app)

@app.route('/')
def form():
    return render_template('form.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5003)

