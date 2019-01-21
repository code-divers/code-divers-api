import * as AWS from 'aws-sdk';
import { GoogleKeyword } from './model/google-keyword';
import { logger } from './logger';
export { logSearchTerms, getSearchTerms };

AWS.config.update({
	region: "us-east-1"
});

const logSearchTerms = async(data) => {
	const docClient = new AWS.DynamoDB.DocumentClient();
	let params = {
		RequestItems: {
			googleSearchTerms: []
		}
	};
	for (let keyword of data.keywords) {
		keyword.customerId = data.customerId;
		keyword.campaignId = keyword.campaign.id;
		keyword.adgroupId = keyword.adGroup.id;
		params.RequestItems.googleSearchTerms.push({
			PutRequest: {
				Item: keyword
			}
		});
	}
	let put = new Promise((resolve, reject) => {
		docClient.batchWrite(params, (err, res) => {
			if (err) {
				return reject(err);
			} else {
				resolve(res);
			}
		});
	});

	await put;

	logger.debug('successfully logged %s search terms', data.keywords.length);
	const response = {
		statusCode: 200,
		body: `successfully logged ${data.keywords.length} search terms for ${data.customerId} customer`
	};
	return response;
};

const getSearchTerms = async(data) => {
	const docClient = new AWS.DynamoDB.DocumentClient();
	let params = {
		TableName: 'googleSearchTerms',
		IndexName: 'customerId-logDate-index',
		KeyConditionExpression: 'customerId = :hkey',
		ExpressionAttributeValues: {
			':hkey': data.customerId
		}
	};
	let get = new Promise((resolve, reject) => {
		docClient.query(params, (err, res) => {
			if (err) {
				return reject(err);
			} else {
				resolve(res.Items);
			}
		});
	});
	let result:any = await get;
	logger.debug('successfully queried %s search terms for customer %s', result.length, data.customerId);
	const response = {
		statusCode: 200,
		body: result,
	};
	return response;
};


