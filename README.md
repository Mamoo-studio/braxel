# Braxelv2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Déploiement (Vercel)

Le site est déployé sur Vercel en SPA statique, à partir de la branche `main` du repo GitHub. La config est dans `vercel.json` :

- install : `npm ci` (utilise `.npmrc` → `legacy-peer-deps`)
- build : `NODE_OPTIONS=--openssl-legacy-provider npm run build` (webpack 4 d'Angular 9 a besoin de ce flag sur Node ≥ 17)
- sortie : `dist/braxelv2/browser`, toutes les routes réécrites vers `index.html`
- en-têtes (cache, CORS) : repris à l'identique de l'ancienne config nginx de prod
- Node : `22.x` (champ `engines` de `package.json`)

Comme sur l'ancien serveur, le site est servi en SPA pure, aux navigateurs comme aux robots : le SSR (`server.ts`, `build:ssr`) n'est pas utilisé.

Les emails des formulaires passent par Firestore (collection `mail`) et l'extension Firebase Trigger Email : aucun backend à déployer.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
