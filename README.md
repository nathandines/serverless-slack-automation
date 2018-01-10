# serverless-slack-automation

## AWS Deployment

Prod deploy. Defaults to `ap-southeast-2`
```sh
SLACK_AUTH_TOKEN="<slack_auth_token_goes_here>" sls deploy --stage prod
```

## Zapier Setup

1. Create a trigger for a "New Channel" event from "Slack"
1. Setup an action of a POST "Webhook"
1. Configure the webhook with the URL of your API Gateway
1. Set the payload type as "json"
1. Set the unflatten option to "false"
1. Configure the header `x-api-key` with your API key
