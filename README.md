# the-it-crowd-ui

## Using Cloud Instance:
- There is a AWS UI cloud instance at ```https://9miwn7w3uh.eu-west-1.awsapprunner.com/```

## Running Docker locally
- Run ```docker build -t the_it_crowd_api . && docker run -p 3000:3000-it the_it_crowd_ui```


# ESLint

[Website](https://eslint.org) |
[Configure ESLint](https://eslint.org/docs/latest/use/configure) |
[Rules](https://eslint.org/docs/rules/) |
[Contribute to ESLint](https://eslint.org/docs/latest/contribute) |
[Report Bugs](https://eslint.org/docs/latest/contribute/report-bugs) |
[Code of Conduct](https://eslint.org/conduct) |
[Twitter](https://twitter.com/geteslint) |
[Discord](https://eslint.org/chat) |
[Mastodon](https://fosstodon.org/@eslint)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Run Lint Check Locally

You can run ESLint locally using this command:

```shell
npm run lint
```

## Run Lint Check Fix Locally

You can run ESLint fix locally using this command:

```shell
npm run lint-fix
```

# Run Assets Script

To make use of the assets within this project you need to upadte app.ts to call the assetRunner.ts. This can be done with the following code snippet:

```javascript
import { AssetRunner } from './test/assets/assetRunner';
let softwareEngineerT = 'test/assets/pdfs/Job profile - Software Engineer (Trainee).pdf'
let softwareEngineerA = 'test/assets/pdfs/Job profile - Software Engineer (Associate).pdf'

let assetRunner = new AssetRunner()
assetRunner.pdfRunner(softwareEngineerT)
assetRunner.pdfRunner(softwareEngineerA)
```