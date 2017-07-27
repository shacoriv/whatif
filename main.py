#WHEN YOU DON'T KNOW WHAT TO IMPORT
import webapp2
import jinja2
import logging
import os
import json
import datetime
import urllib
import urllib2
from google.appengine.api import users
from google.appengine.ext import ndb
import time

jinja_environment = jinja2.Environment(
    loader = jinja2.FileSystemLoader(
    os.path.dirname(__file__) + '/templates'))

#OUR STATIC CLASSES!!!!!!!
class Byte(ndb.Model):
    byte = ndb.StringProperty()

#OUR HANDLERS THAT ACTUALLY DO SHIT
class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('main.html')
        self.response.out.write(template.render())

class AboutHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('about.html')
        self.response.out.write(template.render())

class CreateByte(webapp2.RequestHandler):
    def post(self):
        byte_key = ndb.Key('Byte', self.request.get("byte"))
        byte = byte_key.get()
        if not byte:
            byte = Byte(byte = self.request.get('byte'))
            byte.key = byte_key
            byte.put()
            time.sleep(1)
        self.redirect('/view.html')

class View(webapp2.RequestHandler):
    def get(self):
        query = Byte.query().order(Byte.byte)
        byte_s = query.fetch()
        template = jinja_environment.get_template('view.html')
        var = {'byte':byte_s}
        self.response.out.write(template.render(var))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/create_byte', CreateByte),
    ('/view.html', View),
    ('/main.html', MainHandler),
    ('/about.html', AboutHandler),
], debug=True)
