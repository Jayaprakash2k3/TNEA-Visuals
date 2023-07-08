from flask import Flask,request,render_template
app = Flask(__name__, template_folder='templates')
import requests
@app.route("/")
def hello_world():
    reqUrl = "http://52.90.187.17:8080/tngasa"
    response = requests.request("GET", reqUrl)
    print(response.text)
    return render_template('index.html',data=response.json())

if __name__ == "__main__":
    app.run()