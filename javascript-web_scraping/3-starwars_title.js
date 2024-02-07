#!/usr/bin/node
// a script that prints the title of a Star Wars movie where the episode number matches a given integer
const request = require('request');
const id = process.argv[2];
let url = 'https://swapi-api.hbtn.io/api/films/';
url += id;
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  }
  if (body) {
    console.log(JSON.parse(body).title);
  }
});
