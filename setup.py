from setuptools import setup, find_packages

# from pip.req import parse_requirements
# import pip

# import os

# parse_requirements() returns generator of pip.req.InstallRequirement objects
# install_reqs = parse_requirements("requirements.txt", session=pip.download.PipSession())

# reqs is a list of requirements
reqs = [
    'Flask>=0.11.1',
    'configparser>=3.5.0',
    'uWSGI>=2.0.12',
    'pyyaml>=3.11',
    'flask-assets>=0.11',
    'flask-script>=2.0.5'
]

setup(
    name='IceCTF-landing',
    version='0.0.1',
    author='IceCTF',
    author_email='icectf@icec.tf',
    description='The Icelandic Hacking Competiton (Capture The Flag)',
    packages=find_packages(),
    install_requires=reqs
)
