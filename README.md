## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```
### Set up database (local running)
Run aws dynamodb with Docker:
```bash
docker pull amazon/dynamodb-local
docker run -p 8000:8000 amazon/dynamodb-local
aws dynamodb list-tables --endpoint-url http://localhost:8000
```
Create the Assets table with predefined structure (run in root folder of project code):
```bash
aws dynamodb create-table --cli-input-json file://src/domains/assets/table-scripts/Assets.json --endpoint-url http://localhost:8000
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
