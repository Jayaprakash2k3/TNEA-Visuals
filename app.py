from flask import Flask,request,render_template
app = Flask(__name__, template_folder='templates')
import requests
@app.route("/")
def hello_world():
    return render_template('index.html')
@app.route("/board")
def board():
    mapping={ '1':'Tamil nadu Board of Higher Secondary Education',
            '2':'Central Board of Secondary Education',
    '3':'Council for Indian School Certificate Examinations',
 '27':'National Institute of Open Schooling (NIOS)',
 '4':'Andhra Pradesh Board of Intermediate Education',
 '5':'Assam Higher Secondary Education Council',
 '6':'Bihar Intermediate Education Council',
    '7':'Goa Board of Secondary & Higher Secondary Education',
 '8':'Gujarat Secondary & Higher Education Board',
 '9':'Haryana Board of Education',
 '10':'Himachal Pradesh Board of School Education',
 '11':'J & K State Board of School Education',
 '12':'Karnataka Board of the Pre-University Education',
 '13':'Kerala Board of Higher Secondary Examinations',
 '14':'Maharashtra State Board of Secondary and Higher Secondary Education',
 '15':'Madhya Pradesh Board of Secondary Education',
 '16':'Manipur Council of Higher Secondary Education',
 '17':'Meghalaya Board of School Education',
 '18':'Mizoram Board of School Education',
 '19':'Nagaland Board of School Education',
 '20':'Orissa Council of Higher Secondary Education',
 '21':'Punjab School Education Board',
 '22':'Rajasthan Board of Secondary Education',
 '23':'Tripura Board of Secondary Education',
 '24':'U.P. Board of High School & Intermediate Education',
 '25':'West Bengal Council of Higher Secondary Education',
 '26':'Other Boards if any',
 '28':'Telangana Board of Secondary education',
    }
    reqUrl="http://52.90.187.17:8080/board"
    response = requests.request("GET", reqUrl)
    data=response.json()
    dist=[]
    for each in data["board"]:
        dist.append({"name":mapping[each["_id"]],"count":each["count"]})
    return dist
    
@app.route("/totReg")
def reg():
    reqUrl="http://52.90.187.17:8080/"
    response = requests.request("GET", reqUrl)
    return response.json()
@app.route("/gender")
def gender():
    reqUrl="http://52.90.187.17:8080/gender"
    response = requests.request("GET", reqUrl)
    return response.json()
@app.route("/mode")
def mode():
    reqUrl="http://52.90.187.17:8080/mode"
    response = requests.request("GET", reqUrl)
    return response.json()
@app.route("/government")
def govt():
    reqUrl="http://52.90.187.17:8080/government"
    response = requests.request("GET", reqUrl)
    return response.json()

@app.route("/community")
def community():
    reqUrl="http://52.90.187.17:8080/community"
    response = requests.request("GET", reqUrl)
    return response.json()

@app.route("/district")
def district():
    mapping={ "1":"Ariyalur",
  "2":"Chengalpattu",
  "3":"Chennai",
  "4":"Coimbatore",
  "5":"Cuddalore",
  "6":"Dharmapuri",
  "7":"Dindigul",
  "8":"Erode",
  "9":"Kallakurichi",
  "10":"Kanchipuram",
  "11":"Kanyakumari",
  "12":"Karur",
  "13":"Krishnagiri",
  "14":"Madurai",
  "39":"Mayiladuthurai",
  "15":"Nagapattinam",
  "16":"Namakkal",
  "17":"Perambalur",
  "18":"Pudukkottai",
  "19":"Ramanathapuram",
  "20":"Ranipet",
  "21":"Salem",
  "22":"Sivaganga",
  "23":"Tenkasi",
  "24":"Thanjavur",
  "25":"The Nilgiris",
  "26":"Theni",
  "27":"Thirupattur",
  "28":"Thoothukudi",
  "29":"Tiruchirappalli",
  "30":"Tirunelveli",
  "31":"Tiruppur",
  "32":"Tiruvallur",
  "33":"Tiruvannamalai",
  "34":"Tiruvarur",
  "35":"Vellore",
  "36":"Viluppuram",
  "37":"Virudhunagar",
  "38":"Others"
  }
    reqUrl="http://52.90.187.17:8080/district"
    response = requests.request("GET", reqUrl)
    data=response.json()
    dist=[]
    for each in data["dist"]:
        dist.append({"name":mapping[each["_id"]],"count":each["count"]})
    return dist


if __name__ == "__main__":
    app.run(debug=True)