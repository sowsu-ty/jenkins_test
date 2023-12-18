export default interface EnvironmentVariables {
  APP_NAME: string;
  PORT: number;

  DATABASE_HOST: string;
  DATABASE_PORT: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  DATABASE_LOGGING: string;

  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_S3_BUCKET_NAME: string;
  AWS_REGION: string;

  HTTP_BASIC_USER: string;
  HTTP_BASIC_PASS: string;

  DYNAMODB_ENDPOINT_URL: string;
  DYNAMODB_REGION: string;
  DYNAMODB_ASSETS_TABLE_NAME: string;
}
