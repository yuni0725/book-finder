from flask import Flask, request
from flask_cors import CORS
from modules import read_csv, match_data

data = read_csv()

app = Flask(__name__)
cors = CORS(app, resources={r"/*" : {"origins" : "*"}}, supports_credentials=True)

db = []

@app.route('/send-data', methods=["POST"])
def send_data():
    book_name = request.data.decode('utf-8')

    data_with_value = match_data(data, book_name)

    return data_with_value

@app.route('/send-book-data', methods=['GET'])
def send_book_data():
    return "sald"

if __name__ == "__main__":
    app.run(port="8000", debug=True)