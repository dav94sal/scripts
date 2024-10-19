# [title]

## Database Schema Design

![db-schema]

[db-schema]: ./images/example.png

## Add scripts

Add this code to your new package.json
```js
"scripts": {
    "sequelize": "sequelize",
    "sequelize-cli": "sequelize-cli",
    "start": "per-env",
    "start:development": "nodemon ./bin/www",
    "start:production": "node ./bin/www",
    "build": "node psql-setup-script.js"
  }
  ```

## API Documentation
