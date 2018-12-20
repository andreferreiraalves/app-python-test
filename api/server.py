from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from sqlalchemy import create_engine
from json import dumps

db_connect = create_engine('sqlite:///test.db')

app = Flask(__name__)
CORS(app)
api = Api(app)


class Usuarios(Resource):
    def get(self):
        conn = None
        query = None

        try:
            conn = db_connect.connect()
            query = conn.execute('select * from usuarios')

            result = {'data': [dict(zip(tuple(query.keys()), i))
                               for i in query.cursor]}

            return jsonify(result)
        except Exception as err:
            return {'erro': '{0}'.format(err)}, 500

    def post(self):

        try:
            conn = db_connect.connect()
            login = request.json['login']
            conn.execute(
                "insert into usuarios values(null, '{0}')".format(login))
            return {'status': 'sucess'}
        except Exception as err:
            return {'erro': '{0}'.format(err)}, 500


class Usuario(Resource):
    def get(self, id):
        print(id)

api.add_resource(Usuarios, '/usuarios')
api.add_resource(Usuario, '/usuarios/<id>')

if __name__ == '__main__':
    app.run()
