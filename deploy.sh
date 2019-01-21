#!/bin/bash
set -e
clear
npm run build
echo "update lambda to aws"
cd ~/dev/code-divers-api
echo "compile typescript"
./node_modules/.bin/tsc 
echo "Create package"
rm -rf code-divers-api.zip
zip -r code-divers-api.zip .
echo "Upload to S3"
aws s3 cp code-divers-api.zip s3://code-divers-source/code-divers-api.zip --profile code-divers

aws lambda update-function-code \
--function-name :mapaApi-lambdaLogGoogleSearchTerms-115DVCB65H73C \
--profile code-divers \
--s3-bucket "code-divers-source" \
--s3-key "code-divers-api.zip"