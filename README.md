# Company Inventory Page - Introducing MongoDB

## Initial Step

Go to Api folder and run `npm run install` to install all the dependencies.
Go to Ui folder and run `npm run install` to install all the dependencies.

## Development server

Go to Api folder and run `npm run start` to bring up the Api server.\
Go to Ui folder and run `npm run start` to bring up the UI.\ (Runs on localhost:8000)
Now Navigate to `http://localhost:8000/` to interact with the application.

## MongoDB reset

From Api folder, you can run `mongo "mongodb+srv://cluster0.u2rfn.mongodb.net/InventoryTry" --username pritesh11 scripts/init.mongo.js` and enter password as `test123` to reset the database with two products added initially.

## Lint check

To check for lint issues, go to Api and Ui folder and run `npm run lint` to get the linting issues in the respective folders.
