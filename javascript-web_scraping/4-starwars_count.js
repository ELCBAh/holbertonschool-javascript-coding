#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, _response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    let count = 0;
    for (const i in data.results) {
      for (const j in data.results[i].characters) {
        if (data.results[i].characters[j].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
