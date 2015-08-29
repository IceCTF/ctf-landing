import re
import os
from flask import Flask, redirect, render_template, url_for, request, session, jsonify
from flask.ext import assets
from flask.ext.script import Manager
import smtplib
from email.mime.text import MIMEText
import json

settings = {}
with open(os.path.join(os.path.dirname(__file__), "settings.json")) as f:
    settings = json.loads(f.read())

icectf = Flask(__name__)
icectf.config['DEBUG'] = True
icectf.secret_key = settings["cookie_secret"]

def context_processor():
    return dict()
icectf.context_processor(context_processor)


env = assets.Environment(icectf)
env.load_path = [
    os.path.join(os.path.dirname(__file__), 'static', 'scss'),
    os.path.join(os.path.dirname(__file__), 'static', 'coffee'),
    os.path.join(os.path.dirname(__file__), 'static'),
]
env.register(
    'js_comp',
    assets.Bundle(
        'components/js/**/*.js',
        output='components/js/js-comp.js'
    )
)
env.register(
    'css_comp',
    assets.Bundle(
        'components/css/**/*.css',
        output='components/css/css-comp.css'
    )
)
env.register(
    'js_all',
    assets.Bundle(
        assets.Bundle(
            'coffee/*.coffee',
            filters=['coffeescript']
        ),
        output='js-all.js'
    )
)
env.register(
    'css_all',
    assets.Bundle(
        assets.Bundle(
            'main.scss',
            filters='scss',
            depends=('**/*.scss','*.scss')
        ),
        output='css-all.css'
    )
)

@icectf.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

# @datadrive.errorhandler(500)
# def internal_error(error):
#     # db.session.rollback()
#     return render_template('500.html'), 500

@icectf.route('/')
def index():
    return render_template('index.html')

@icectf.route('/about')
def about():
    return render_template('about.html')

@icectf.route('/contact', methods={"GET", "POST"})
def contact():
    if request.method == "POST":
        ret = "Thanks!"
        if request.form["name"].strip().lower() == "linus torvalds":
            if request.form["email"].strip().lower() == "torvalds@osdl.org":
                ret = "I love you! Here is the flag: {i_<3_LiNuX}"
            else:
                ret = "I don't believe its you!"
            return jsonify(success=1, message=ret)

        message = "Name: %s \nEmail: %s \nMessage: %s" % (request.form["name"], request.form["email"], request.form["message"])
        msg = MIMEText(message, 'text')
        msg['Subject'] = "IceCTF Contact - %s" % (request.form["name"])
        msg['From'] = "notice@icec.tf"
        msg['To'] = "notice@icec.tf"
        msg["Reply-To"] = request.form["email"]
        smtp = None
        try:
            smtp = smtplib.SMTP_SSL(settings["email_server"])
            smtp.login(settings["email_user"], settings["email_pw"])
            smtp.sendmail(settings["email_user"], [settings["email_user"]], msg.as_string())
            smtp.quit()
            return jsonify(success=1, message=ret)
        except:
            return jsonify(success=0, message="An error occured.")
    return render_template('contact.html')

@icectf.route('/faq')
def faq():
    return render_template('faq.html')

@icectf.route('/play')
def play():
    return "gowai"

@icectf.route('/challenges')
def challenges():
    return render_template('challenges.html')

@icectf.route('/sponsors')
def sponsors():
    return render_template('sponsors.html')

