const axios = require('axios');
const cheerio = require('cheerio');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function refresh() {
     var xhttp = new XMLHttpRequest();
     xhttp.open("GET", "https://59plwmzbq9.execute-api.us-east-1.amazonaws.com/prod", true);
     xhttp.send();
     xhttp.addEventListener("readystatechange", processRequest, false);

var input = "";

function processRequest(e) {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response1 = JSON.parse(xhttp.responseText);
        var input = response1.researchItem.S;

        console.log(input);

var url = 'https://www.google.com/search?q=' + input + '+information';
        ;(async () => {
          const response = await axios.get(url)
          data = [];
          const $ = cheerio.load(response.data);
          console.log($);
          $(".r").each((i, elem) => {
              data.push(
                  $(elem).text()
              );
          });
          console.log(data);
        })()

    }

}
setTimeout(refresh, 100000);
    }
    refresh();
