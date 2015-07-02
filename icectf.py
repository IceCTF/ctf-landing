from icectf.routes import icectf, env

from flask.ext.script import Manager
from flask.ext.assets import ManageAssets

manager = Manager(icectf)
manager.add_command("assets", ManageAssets(env))

if __name__ == '__main__':
    manager.run()
