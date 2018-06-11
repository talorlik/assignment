# Assignment

This assignment is based on the todo project. I used that as a base and then upgraded it.

I've turned the todo portion into a module which I then lazy-load

I've introduced an authentication module which I've coded. The auth module makes use of Auth0.
Username: talorlik+assignment@gmail.com
Password: P@ssword123

Instead of using an external api I've created my own internal api using json-server which loads the todo list.
To run it:
  1. Navigate to json-server directory
  2. Type `npm start`. The json-server runs on `http://localhost:3000`

I used Angular Material Design & Bulma for the front-end structure and styling.

## Docker

I've dockerised both the api and the front-end layers and have added a docker-compose to run them automatically.
Instructions on how to run the docker-compose are in the docker-compose.yml file

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4500/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

All the code was generated using `ng`

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. The build is always for production.

## Running unit tests

I haven't really done tests. Some of the default generated test may or may not work.

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

I have not done any e2e test.

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Known issues

1. Page content not expanding to fill window.
2. Routing issue: on refresh page is lost due to loss of authorisation.
3. Bottom counter does not reflect true remaining items.
