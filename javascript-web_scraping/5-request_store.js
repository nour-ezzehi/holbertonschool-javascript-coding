#!/usr/bin/node
// a script that gets the contents of a webpage and stores it in a file.
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const bodyResponse = process.argv[3];
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(bodyResponse, body, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
