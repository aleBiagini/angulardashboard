# angulardashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Setup HTTPS on localhost

- Download and Install this [tool](https://github.com/FiloSottile/mkcert) => choco install mkcert
- Install self-signed certificates in your machine => mkcert -install
- create a folder "certs" in your project root if is not already there (/) => mkdir certs
- insert the created certificates in the "certs" folder and you are ready to run your dev server in https => cd certs
- mkcert localhost 127.0.0.1

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
