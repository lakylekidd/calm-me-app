# Calm.me
Calm.me is an app build specifically for a 2 day hackathon organized by [Codaisseur](https://github.com/codaisseur) as a contest.

## Table of Contents
- [Project Description](##project-description)
- [TODOS](##todos)
- [Technologies used](##technologies-used)
- [Demo](##demo)
- [Development Server](##development-server)
    - [Installation](###installation)
    - [Building the project](###building-the-project)
    - [Running tests](###running-tests)


## Project Description
Calm.me app is a resource that provides mindful exercises and techniques to calm a stressfull mind. There is also an app that allows the user to quickly relax via a popular breathing technique developed by Apple for the Apple Watch. I have replicated the app using SCSS and synchronized it using Typescript, instructing the user on when to breathe in and out.

## TODOS
- [ ] Create a calendar to store all the breathing exercises made by date and time, when the user is logged in
- [ ] Create a form that allows the user to input all his meditation exercises and select an emoji based on the amount of relaxation he achieved
 
## Technologies Used
For this project, I have used the following modern technologies:
- Angular 8
- RXJS
- SCSS
- TypeScript
- Karma / Jasmine
- Protractor

This web app depends on a back-end REST API made in entirely in JAVA. You can view [this GitHub project here](https://github.com/lakylekidd/calm-me-api).

## Demo
You can view a demo of this application on heroku [here](https://calm-me.herokuapp.com/).


## Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Installation
You can install this repo in just a few easy steps:
- Clone this repo by running `git clone git@github.com:lakylekidd/calm-me-app.git calm-me-client`.
- Navigate to the project folder `cd calm-me-client`.
- Install packages `npm install`
- Run the server `npm start`

### Building the project
You can run `npm build` to build the project in development mode. The build artifacts will be stored in the `dist/` directory. You can also run `npm build-prod` to build in production mode.
> Please note that if you deploy to, for example, Netlify or another Node hosting service you will need to update the `build` script to run `ng build -prod` instead. These services usually run a `build` command by default. You can check the documentation of your hosting service for more details. 

### Running tests
This project has implemented extended Angular testing using [Karma](https://karma-runner.github.io). You can run `npm test` to execute the unit tests. Unit tests are displayed in a graphical UI in Chrome that run on port: 9876. A Chrome instance will automatically run and display the tests


### Running end-to-end tests
This project also implements very basic [e2e tests](https://angular.io/cli/e2e) by default. You can Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve` or `npm start`.