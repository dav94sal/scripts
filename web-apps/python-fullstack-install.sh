pipenv install flask sqlalchemy wtforms flask-wtf \
       flask-sqlalchemy alembic flask-migrate \
       python-dotenv

pipenv install --dev pylint pycodestyle rope

touch .env
touch .flaskenv
touch order_up.py

mkdir app
cd app
touch config.py
touch __init__.py
touch models.py

mkdir routes
cd routes
touch __init__.py
touch orders.py
