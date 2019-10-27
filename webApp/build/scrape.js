const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://news.ycombinator.com';

var xhttp = new XMLHttpRequest();
     xhttp.open("GET", "https://59plwmzbq9.execute-api.us-east-1.amazonaws.com/prod", true);
     xhttp.send();

if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response1 = JSON.parse(xhttp.responseText);
        var input = response1.researchItem.S;

        console.log(input);

var url = 'https://www.google.com/search?q=' + input + '+information';

;(async () => {
          const response = await axios.get(url)
          console.log(response)
        })()
