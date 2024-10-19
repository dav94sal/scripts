#!/usr/bin/bash

npm install --save "cookie-parser" "cors" "csurf" "dotenv" \
                   "express" "express-async-errors" "helmet" \
                   "jsonwebtoken" "morgan" "per-env" "sequelize@6" \
                   "sequelize-cli@6" "pg" "react-router-dom"

npm install --save-d 'sqlite3' 'dotenv-cli' 'nodemon'


touch README.md
cp ~/scripts/javascript-backend-setup/README.md README.md

touch .env
cp ~/scripts/javascript-backend-setup/.env.example .env

touch .sequelizerc
cp ~/scripts/javascript-backend-setup/.sequelizerc .sequelizerc

touch .gitignore
cp ~/scripts/javascript-backend-setup/.gitignore .gitignore


mkdir config

cd config

touch index.js
cp ~/scripts/javascript-backend-setup/index.js index.js

cd ../


npx sequelize init


cd config

touch database.js
cp ~/scripts/javascript-backend-setup/database.js database.js

cd ../


npx dotenv sequelize db:migrate


touch app.js
cp ~/scripts/javascript-backend-setup/app.js app.js


mkdir routes
cd routes

touch index.js
cp ~/scripts/javascript-backend-setup/routes.js index.js

mkdir app
cd app

touch index.js

cd ../..


mkdir bin
cd bin

touch www
cp ~/scripts/javascript-backend-setup/www www


# echo "All required packages and dependencies installed successfully!"
