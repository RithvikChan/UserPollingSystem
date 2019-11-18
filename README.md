# Realtime polling application with Pusher and Python

This is a demo application showing how to build a realtime polling application using [Python](https://www.python.org/) and [Pusher](https://pusher.com/). You can read about how it was created on [Pusher's blog](https://pusher.com/tutorials/live-poll-python).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to install the software.

* Git.
* Python.
* Pip.

## Install

Clone the git repository on your computer

> $ git clone https://github.com/neoighodaro/python-realtime-poll-pusher

You can also download the entire repository as a zip file and unpack in on your computer if you do not have git

After cloning the application, you need to install it's dependencies.

> $ cd python-realtime-poll-pusher

> $ pip install flask
> $ pip install pusher
> $ pip install simplejson

## Setup

* Setup the database for the application
> $ python dbsetup.py
* To set the application in development environment, run the following code
> $ export FLASK_ENV=development

## Run the application
 
> $ flask run

## Built With

* [Pusher](https://pusher.com/) - Hosted APIs to build realtime apps with less code
* [Python](https://www.python.org/) - a programming language that lets you work quickly and integrate systems more effectively
* [Flask](http://flask.pocoo.org/) - a microframework for Python based on Werkzeug, Jinja 2 and good intentions
