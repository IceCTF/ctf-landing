from icectf.routes import icectf, env

from flask_script import Manager
from flask_assets import ManageAssets

manager = Manager(icectf)
manager.add_command("assets", ManageAssets(env))

if __name__ == '__main__':
    manager.run()
