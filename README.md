# Instructions
- Clone and rename folder `$ git clone git@github.com:dented-academy/express-api-starter.git project-4-backend`
- Find and rename all instance of `project-4-backend` to your project name
- Create a `.env` file you need to change `CORS_ORIGIN` if you UI is not `localhost:8080`
  ```txt
  COOKIE_SECRET=put_something_random_here
  CORS_ORIGIN=http://localhost:8080
  ```
- Run `$ npm install`
- Run `$ npx sequelize-cli init`
- Run `$ npx sequelize-cli db:create`
- Run `$ git remote remove origin`
- Create a new repo and add the repo ssh link to remote
- Run `$ git push origin master`
