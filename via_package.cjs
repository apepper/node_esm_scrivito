const {XMLHttpRequest} = require('w3c-xmlhttprequest')

const request = new XMLHttpRequest()
request.open('GET', 'https://api.scrivito.com')

request.onload = (response) => console.log('request succeeded', response);
request.onerror = (e) => console.error('request errored with', e);
request.ontimeout = (e) => console.error('request timedout with', e);
request.onabort = (e) => console.error('request aborted with', e);

request.send();
console.log('whatever')
