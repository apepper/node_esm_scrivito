const https = require('node:https');

const agent = new https.Agent();

const req = https.request({
  hostname: 'api.scrivito.com',
  port: 443,
  path: '/',
  method: 'GET',
  agent,
}, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`, e);
});

req.end();
