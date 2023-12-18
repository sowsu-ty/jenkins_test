import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import 'dotenv/config';

const { DYNAMODB_ENDPOINT_URL, DYNAMODB_REGION } = process.env;

const client = new DynamoDBClient({
  region: DYNAMODB_REGION,
  endpoint: DYNAMODB_ENDPOINT_URL,
});

export const docClient = DynamoDBDocumentClient.from(client);
