# LintingFormattingPractice

This simple angular application is a practice on how to set up linting tools like eslint, prettier and husky.
I am going to walk you through the process of how to set up those development tools.

- **Step 1** Installing eslint

```bash
ng add @angular-eslint/schematics

```

\_ **Step 2** Adding eslint.config.json file

```bash
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "parserOptions": {
        "project": ["tsconfig.json"]
      },
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {
        "@angular-eslint/template/no-negated-async": "error"
      }
    }
  ]
}
```

- **Step 3** Installing prettier and eslint plugins

```base
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

```

- **Step 4** Create .prettierrc.json file for prettier configuration

```base
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2,
  "semi": true
}
```

- **Step 5** Install Husky

```base
npx husky-init && npm install
```

- **Step 6** Configure Husky to Run Prettier and ESLint

```base
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx prettier --write .
npx eslint . --ext .ts,.html
```

- **Step 7** Add staged linter to lint your codebase when you add and run prettier to the added codes

```base
npm install --save-dev lint-staged
```

- **Step 8** Add lint-staged in package.json

```base
"lint-staged": {
  "*.ts": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.scss": "prettier --write"
}

```

- **Step 9** Then, modify the Husky pre-commit file to run lint-stagedlint-staged

```base
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

When you stage your changes, husky will prettify and lint the whole added files.

## Bugs fixed after cloning the repository

After cloning the repo, there was an app.module.ts file that had both components imported, even thought the project was scafolded using standolone components. to fix the bug, I had to make both components standalone and import all necessary imports to fix bugs.

## Errors and Warnings

They were like 12 after configuring and linting the entire codebase, and after pretifying it. it automatically fixed some of them like turning the let variable into const because it was never reassigned.

Removing all unused imports and unused variables.

But things like console.log that were in app.component.ts had to be manually fixed.

After manually removing all console.logs in app.component.ts, there was another console.log in main.ts file that logs the error when there's an error bootsrapping all components, I had to ignore that one by adding a .eslintignore file in root of my application.

## Live Preview of the project

Follow this link to preview the project [Link](https://charming-beijinho-28efa8.netlify.app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
