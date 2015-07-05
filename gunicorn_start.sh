#!/bin/sh
WORKERS=${1:-4}
gunicorn -b 0.0.0.0:5000 -w $WORKERS 'icectf.routes:icectf'
