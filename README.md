-INSTALL CRA-RKT WITH Eslint airbnb
https://redux-toolkit.js.org/introduction/getting-started
==================================

https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97

1.

Create React App with TypeScript
Start a new project with create-react-app and the typescript flag.

npx create-react-app my-app --template typescript

NPM Packages
We’ll be adding the following packages:

@typescript-eslint/eslint-plugin
@typescript-eslint/parser
eslint-config-airbnb-typescript
eslint-config-prettier
eslint-plugin-import (Airbnb peer)
eslint-plugin-jest
eslint-plugin-jsx-a11y (Airbnb peer)
eslint-plugin-prettier
eslint-plugin-react (Airbnb peer)
eslint-plugin-react-hooks (Airbnb peer)
prettier


---command without prettier-----------
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

---command with prettier-----------
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint-plugin-prettier prettier

----command only with prettier----
npm i -D  eslint-config-prettier eslint-plugin-prettier prettier


!!!! 
Install the ESLint packages for TypeScript and Jest support. Note, ESLint is installed with create-react-app, so you don’t need to explicitly install it.


2.
Then install the packages for Airbnb config. This command will work for Yarn or NPM.

npx install-peerdeps --dev eslint-config-airbnb


Update on the above command:


For anyone having issues regarding the eslint version, it's due to the fact that the…
You can install the needed packages for this article with the following command, which won't mess with your dependency…
medium.com

3.

Prettier
Next, add the packages to integrate ESLint with Prettier rules.

npm i -D prettier eslint-config-prettier eslint-plugin-prettier
ESLint Config


create eslinrc file with 

npm init @eslint/config

and ask the questions !!!!!



The ESLint config will look something like this:
---------------
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
   },

  };

-------------------
4.

Scripts
Lint and format with these scripts:

"scripts": {
  "format": "prettier --write src/**/*.ts{,x}",
  "lint": "tsc --noEmit && eslint src/**/*.ts{,x}"
}

5.
ignore files ?

resolved reules sicle =>    import type {Rootstate} 
























!!!!!!
example to satrt multi command in cli
mkdir typescript-starter && cd typescript-starter && npm init
!!!!!!

--eslint :
https://eslint.org/

create config file .eslintrc and ask for questions in command line
npm init @eslint/config


install airbnb config
https://www.npmjs.com/package/eslint-config-airbnb-typescript

npm i eslint-config-airbnb-typescript

Configure ESLint
Within your ESLint config file:

extends: [
  'airbnb',
+ 'airbnb-typescript'
]

4) Configure the ESLint TypeScript parser
This config requires knowledge of your TypeScript config.

In your ESLint config, set parserOptions.project to the path of your tsconfig.json.

For example:

{
  extends: ['airbnb', 'airbnb-typescript'],
+ parserOptions: {
+   project: './tsconfig.json'
+ }
}




---- ????

Установите расширение ESLint VS Code.

Создайте новую папку .vscodeв корне вашего проекта. Теперь вы можете отредактировать файл конфигурации настроек рабочего пространства .vscode/settings.json, чтобы ESLint автоматически исправлял устранимые проблемы при сохранении:

{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}

-------

check the formant and lin and create prettierrc file in root of project
alsi add or disabel rules in .eslintrc file 

read error and resolve this not make rule false..

???    ignore file fo eslint and prettier

 update plugins if created CRA !!!! npm i







