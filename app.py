from flask import Flask, render_template, request, jsonify, make_response, redirect, flash, url_for
from dbsetup import create_connection, select_all_items, update_item, add_poll, fetchPoll, updatePoll
from flask_cors import CORS, cross_origin
from pusher import Pusher
import simplejson
from forms import AddPollForm 
import os
import time

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
pusher = Pusher(app_id=u'109121', key=u'3a2a219040583d8ee1b4', secret=u'09b8686698072e44711d', cluster=u'mt1')
database = "./pythonsqlite.db"
conn = create_connection(database)
c = conn.cursor()
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = '09b8686698072e44711d'
def main():
	global conn, c
@app.route('/')
def index():
	return render_template('index.html')

@app.route('/admin')
def admin():
	return render_template('admin.html')

@app.route('/vote', methods=['POST'])
def vote():
	data = simplejson.loads(request.data)
	k = fetchPoll(c,data['id'])
	oldData = simplejson.loads(k)
	# oldData["options"][data["member"]]+=1
	options = simplejson.loads(oldData["options"])
	options[data["member"]]+=1
	updatePoll(c, data['id'], options)
	b = fetchPoll(c,data['id'])
	pusher.trigger(u'poll', u'vote', [])
	return b

@app.route('/question', methods=['GET'])
def redirect():
	question = request.args.get('ques')
	return fetchPoll(c,question)



@app.route('/addPoll', methods=['POST'])
def login():
    form = AddPollForm()
    flash(add_poll(c,form.question.data, form.option1.data,form.option2.data))
    return render_template("messages.html")
if __name__ == '__main__':
	main()
	app.run(debug=True)
