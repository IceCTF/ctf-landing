
from icectf.routes import icectf

from flask.ext.script import Manager

manager = Manager(icectf)
if __name__ == '__main__':
    manager.run()
