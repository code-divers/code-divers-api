let AWS = require("aws-sdk");

AWS.config.update({
	region: "us-west-2",
	endpoint: "http://localhost:8000"
});

let dynamodb = new AWS.DynamoDB();

let params = {
	TableName : "keywords",
	KeySchema: [
		{ AttributeName: "query", KeyType: "HASH"},  // Partition key
		{ AttributeName: "date", KeyType: "RANGE" }  // Sort key
	],
	AttributeDefinitions: [
		{ AttributeName: "query", AttributeType: "S" },
		{ AttributeName: "date", AttributeType: "N" }
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 10,
		WriteCapacityUnits: 10
	}
};

dynamodb.createTable(params, function(err, data) {
	if (err) {
		console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
	} else {
		console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
	}
});