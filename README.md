IceC.TF
======

# Description
IceCTF is a computer security competition targeted at Icelandic University or College students. The competiton consists of a series of challenges where participants must reverse engineer, break, hack, decrypt, or do whatever it takes to solve the challenge. The challenges are all set up with the intent of being hacked, making it an excellent, legal way to get hands-on experience.

IceCTF is an offensively-oriented University/College computer security competition that seeks to generate interest in computer science among students: teaching them enough about computer security to get them interested and curious, motivating them to explore on their own, and enabling them to better defend their machines.

## The Competition
IceCTF is a classic CTF (Capture The Flag) competition. In Capture The Flag contestants are presented with a set of challenges which test their creativity, technical (and googling) skills, and problem-solving ability. Challenges usually cover a number of categories, and when solved, each yields a string (called a flag) which is submitted to an online scoring service. CTF competitions are a great way to learn a wide array of computer security skills in a safe, legal environment, and are hosted and played by many security groups around the world for fun and practice.

## Recommended Skills
Some familiarity with programming will be helpful. Exposure to Python, HTML, JavaScript, and C (though C#/Java syntax is close enough for this purpose) is ideal, but in no way required.

## Teachers
Teachers will be able to observe the progress of the students on that team as they play through the competiton and more easily identify places where they get stuck.
In addition to providing information on where your students need the most help, grouping teams of students together in classes gives these teams their own private scoreboard containing just other teams from the same class.

## Rules & Restrictions

IecCTF has a few guidelines. While there are no limitations on the resources or tools that you can use, only students may solve challenges. Team advisors, or anyone outside the team, may help facilitate the team's work, such as by helping set up tools or providing resources, but may not provide direct assistance on any problems.

Additionally, teams may not interfere with the progress of other teams, nor with the operation of the competition's infrastructure. More specifically, attacking the scoring server, other teams, or machines not explicitly designated as targets is cheating. This includes both breaking into such machines, and denying others access to them or the ability to solve problems (for example, by altering a key or ping-flooding). Sharing keys or providing overly-revealing hints with other teams is cheating, as is being directly assisted by personnel outside the team (using tools from the internet is OK; asking people on the internet to help you solve the problem is not). We encourage you to solve problems in novel and creative ways using all available resources, but we do require that you solve them yourselves.

# Technology stack

- Python 3
- Flask
- SQLAlchemy
- PostgreSQL

# Design Pattern

### MVC

```
 .__________________.     .____________________.
 | Controler/Router |-----| Model (SQLAlchemy) |
 '=================='     '===================='
          |
          |
  .===============.
  | View (Jinja2) |
  '==============='
```

# Database
I use a postgres database to store all relational data and I use SQLAlchemy with Alembic for Models and Database Migrations

# Features
- Login System
- Teams
- Score / Submission server
- Leaderboard
- Teachers
- Monitoring tools for teachers
- Private leadeboards classes

# Setup

## Development

### Setting up the database roles and permissions

First, set up the database roles and permissions. This will need to be done as
the `postgres` unix user with `psql`.

```
sudo su postgres
psql
```

Then create the `icectf` user with password `IcelandCTF2014`. You also need to create the database:
```
CREATE ROLE icectf with login;
ALTER ROLE icectf WITH PASSWORD 'IcelandCTF2014';
CREATE DATABASE icectf with ENCODING 'UTF-8';
GRANT ALL PRIVILEGES ON DATABASE icectf TO ctf;
```

### Building the project

To build the project you require the following dependencies:

- libffi-dev
- libpq-dev
- libxml2-dev
- libxslt1-dev
- make
- postgresql
- postgresql-contrib
- python
- python-virtualenv
- python-tox
- python-dev

From within the repository directory simply run `make build`

This should run the unittest for you and also setup a temporary virtual environment to ensure that the
dependencies are setup correctly.
