import {
  GetCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { docClient } from 'src/domains/aws/dynamoDBClient';
import { CreateAssetDto } from '../dto/create-asset.dto';
import { UpdateAssetDto } from '../dto/update-asset.dto';

const { DYNAMODB_ASSETS_TABLE_NAME } = process.env;

@Injectable()
export class AssetRepository {
  async create(createAssetDto: CreateAssetDto) {
    const command = new PutCommand({
      TableName: DYNAMODB_ASSETS_TABLE_NAME,
      Item: {
        AssetID: createAssetDto.AssetID,
        Name: createAssetDto.Name,
        OriginalName: createAssetDto.OriginalName,
        Type: createAssetDto.Type,
        Quality: createAssetDto.Quality,
      },
    });

    const response = await docClient.send(command);
    return response;
  }

  async findAll() {
    const command = new ScanCommand({
      TableName: DYNAMODB_ASSETS_TABLE_NAME,
    });
    const response = await docClient.send(command);
    for (const asset of response.Items) {
      console.log(`${asset.AssetID} - (${asset.Name}, ${asset.Type})`);
    }
    return response;
  }

  async find(assetId: string) {
    const command = new GetCommand({
      TableName: DYNAMODB_ASSETS_TABLE_NAME,
      Key: {
        AssetID: assetId,
      },
    });

    const response = await docClient.send(command);
    return response.Item;
  }

  async update(assetId: string, updateAssetDto: UpdateAssetDto) {
    // Use ExpressionAttributeNames to avoid the error if an attribute is duplicated with reserved word https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeNames.html
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};
    const updateExpressionSetArr = [];
    for (const [key, value] of Object.entries(updateAssetDto)) {
      updateExpressionSetArr.push(`#${key} = :${key}`);
      expressionAttributeNames[`#${key}`] = key;
      expressionAttributeValues[`:${key}`] = value;
    }

    const command = new UpdateCommand({
      TableName: DYNAMODB_ASSETS_TABLE_NAME,
      Key: {
        AssetID: assetId,
      },
      UpdateExpression: 'set ' + updateExpressionSetArr.join(','),
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    });

    const response = await docClient.send(command);
    return response;
  }
}
