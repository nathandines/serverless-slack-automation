'use strict';

const https = require('https');

module.exports.join = (event, context, callback) => {
  var requestData = JSON.parse(event.body);

  // An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
  var token = process.env.SLACK_AUTH_TOKEN;
  var postData = JSON.stringify({
    channel: requestData.id
  });

  var postOptions = {
    host: 'slack.com',
    port: '443',
    path: '/api/conversations.join',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(postData),
      'Authorization': ['Bearer', token].join(' ')
    }
  };

  // Set up the request
  var postReq = https.request(postOptions, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });

  // post the data
  postReq.write(postData);
  postReq.end();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Joined user to channel #" + requestData.name,
      input: event,
    }),
  };

  callback(null, response);
};
