from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextField
from wtforms.validators import DataRequired

class AddPollForm(FlaskForm):
    question = TextField('question')
    option1 = TextField('option1')
    option2 = TextField('option2')
    submit = SubmitField('Submit')