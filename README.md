```
Hey There! 🙌 
🤾 Welcome to My-To-Dos 
```

This is a full-stack web application for managing your to-do list with a translation feature. 

* The frontend is built using [Angular](https://angular.io) web framework, and is using [Angular Material](https://material.angular.io) for UI components. 
* For State Management - [Ngrx](https://ngrx.io) is used to manage global and local state. It provides isolation of side effects to promote a cleaner component architecture. 
* The backend is built using [Express.js](https://expressjs.com/) web framework, and is using [Typescript Lang](https://www.typescriptlang.org/) for writing the app's logic. 
* For Database - Data is stored in [PostgreSQL](https://www.postgresql.org) using [Sequelize](https://sequelize.org) as the Object Relational Mapping (ORM).
* For Authentication - [Firebase Authentication](https://firebase.google.com/docs/auth) is used for user authentication and authentication-related tasks. The authentication process can be divided into three steps:
    1. Firebase authentication in the frontend. After authentication, firebase will send back a user object withholding the JWT token.
    2. Then we can use that JWT token to send API requests to our backend.
    3. Then the backend can use that JWT token to verify the user from firebase, if the user is validated, we can send data to the frontend otherwise we can ignore the request received from the frontend.
* For translation feature - [Google Translation API](https://cloud.google.com/translate/docs/) is used to build translation feature.
* Live Demo - [My-to-dos](https://app-xoqbundyrq-ts.a.run.app) is now hosted on [Google Cloud Run](https://cloud.google.com/run) and integrated with [Cloud SQL](https://cloud.google.com/sql/docs/postgres/features) as the database.
* CI/CD - By utilizing [GitHub Action](https://docs.github.com/en/actions), automated testing will be performed on each pull request, the docker image will be built and then deployed to [Google Cloud Run](https://cloud.google.com/run) on each successful push to main branch. 

# Contents

* [Dependencies](#dependencies)
* [App Structure](#app-structure)
* [Install, Configure & Run](#install-configure--run)
* [List of Routes](#list-of-routes)
* [Deployment](#deployment)

# Dependencies

Frontend:
* angular (>= 15.1.1)
* angular/material (>= 15.1.1)
* ngrx (>= 15.3.0)
* rxjs (>= 7.8.0)
* tslib (>= 2.3.0)
* eslint (>= 8.33.0)
* jasmine (>= 4.5.0)
* karma (>= 6.4.0)
* prettier (>= 2.8.4)
* typescript (>= 4.9.4)
* zone.js (>= 0.12.0)
* firebase (>=9.17.1)

Backend:
* node (>= 10.5.0)
* cors (>= 2.8.5)
* dotenv (>= 16.0.3)
* express (>= 4.18.2)
* firebase-admin (>= 11.5.0)
* pg (>= 8.9.0)
* pg-hstore (>= 2.3.4)
* sequelize (>= 6.28.0)
* eslint (>= 8.33.0)
* nodemon (>= 2.0.20)
* prettier (>= 2.8.4)
* typescript (>= 4.9.5)

# App Structure

> _Note: I am mentioning only files/folders which need to configure if required_

```bash
├── client
│   ├── angular.json
│   ├── firebase.json
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── app
│   │   │   ├── angular-material.module.ts
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── components
│   │   │   │   ├── admin
│   │   │   │   ├── forgot-password
│   │   │   │   ├── home
│   │   │   │   ├── login
│   │   │   │   ├── register
│   │   │   │   ├── to-do-list
│   │   │   │   └── verify-email
│   │   │   ├── guard
│   │   │   │   ├── admin.guard.ts
│   │   │   │   └── auth.guard.ts
│   │   │   ├── models
│   │   │   │   ├── index.ts
│   │   │   │   ├── task.interface.ts
│   │   │   │   └── user.interface.ts
│   │   │   ├── pipes
│   │   │   │   └── task-filter.pipe.ts
│   │   │   ├── services
│   │   │   │   ├── admin.service.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── tasks.service.ts
│   │   │   │   └── translate.service.ts
│   │   │   └── state
│   │   │       ├── core.reducer.ts
│   │   │       ├── core.state.ts
│   │   │       ├── index.ts
│   │   │       └── tasks
│   │   │           ├── index.ts
│   │   │           ├── task.action.ts
│   │   │           ├── task.effect.ts
│   │   │           ├── task.reducer.ts
│   │   │           ├── task.selector.ts
│   │   │           └── task.state.ts
│   │   ├── env
│   │   │   ├── environments.ts
│   │   │   └── proxy.conf.json
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
├── package.json
└── server
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── config
    │   │   ├── db.config.ts
    │   │   ├── firebase.config.ts
    │   │   └── serviceAccountKey.json
    │   ├── controllers
    │   │   ├── admin.controller.ts
    │   │   └── task.controller.ts
    │   ├── index.ts
    │   ├── middlewares
    │   │   └── index.ts
    │   ├── models
    │   │   ├── index.ts
    │   │   └── task.model.ts
    │   └── routes
    │       ├── admins.routes.ts
    │       ├── index.ts
    │       └── tasks.routes.ts
    └── tsconfig.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run on your local environment.

```bash
# Clone the repo.
git clone https://github.com/horus2121/To-Dos.git;

# Go to the cloned project folder.
cd to-dos;
```

## Backend:

```bash
# Go to the server folder.
cd server;

# Install NPM dependencies.
npm install;

```
In order to authenticate requests to Firebase Admin SDK APIs, you need to obtain a Firebase Authentication Admin Service Account Key following these steps:

1. Go to the Firebase Console and select your project.
2. Click on the gear icon on the top left corner of the screen and select "Project settings."
3. Click on the "Service accounts" tab and then on the "Generate new private key" button.
4. A JSON file containing your new private key will be downloaded automatically to your computer.

Note: Make sure to keep this key file safe and secure, as it contains sensitive information that should not be shared publicly.

After downloading Service Account Key, go to next step:

```bash
# Put your Service Account Key in this directory for Firebase Admin SDK initialization.
/src/config/

# Note: It is also assumed here that you have PostgreSQL running in the background and that you have created the database, otherwise go to [PosgreSQL](https://www.postgresql.org) for more instructions.

# Edit your db.config file(username, password...) using any editor of your choice.
vim ./src/config/db.config.ts

# Note: corsOptions in index.ts is used for enabling CORS, the target currently is configured as PORT 4200, you should make proper change to this configuration whenever the client running PORT changes
const corsOptions = {
  origin: 'http://localhost:4200'
};
app.use(cors<Request>(corsOptions));

# Run the server
# Note: the server is running on PORT 8000, or you can config it in .env file under server directory
npm run dev;
```
## Frontend:

```bash
# Go to the client folder.
cd client;

# Install NPM dependencies.
npm install;

```
Also for the purpose of authenticating users and managing authentication-related tasks, you need to obtain a Firebase Authentication Config Key following these steps:

1. Go to the Firebase Console and select your project.
2. Click on the gear icon on the top left corner of the screen and select "Project settings."
3. Scroll down to the "Your apps" section and select the web app you want to use.
4. Under the "Firebase SDK snippet" section, select "Config."
5. A code snippet containing your Firebase configuration details will be displayed. Copy this snippet to your clipboard.

After saving Config Key, go to next step:

```bash
# Edit environments.ts file inside env folder, add the Firebase config details
vim ./src/env/environments.ts

# environments.ts now should look like as follow:
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    projectId: "<your-project-id>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-messaging-sender-id>",
    appId: "<your-app-id>"
  }
};

# Note: proxy.conf.json is used for enabling CORS, the target currently is configured as PORT 8000, you should make proper change to this configuration whenever the server running PORT changes
vim ./src/env/proxy.conf.json

# Run the client
# Note: Angular app by default is running on PORT 4200, open your browser on http://localhost:4200/ 
ng serve;
```


# List of Routes

```sh
# Client Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /home
  GET    | /register
  POST   | /register
  GET    | /login
  POST   | /login
  GET    | /verify-email
  GET    | /forget-password
  GET    | /admin
  GET    | /to-do-list
+--------+-------------------------+

# Server Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /api/:userId/tasks
  POST   | /api/:userId/tasks
  PATCH  | /api/:userId/tasks/:taskId
  DELETE | /api/:userId/tasks/:taskId
  POST   | /api/admin/users
  PATCH  | /api/admin/users/:userId
  DELETE | /api/admin/users/:userId
+--------+-------------------------+
```

# Deployment

[My-To-Dos GCR Deployment](https://horus21.atlassian.net/l/cp/1NmbgcEw) describes how to deploy the application to GCR step by step.