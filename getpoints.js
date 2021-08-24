// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');


// URL of the page we want to scrape
const url = "https://streamvip.app/cristianghost/rank";


var users = []

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);

    var user = []
    var users = []

    $("#rank > tbody > tr > td").each((index, userCol) => {

        if(index % 4 === 0 && index != 0) {
            users.push(user)
            user = []
        }

        user.push($(userCol).text().trim().replace(/\n/g, ''))

    });

    console.log(users)

    fs.writeFile('cristianghost.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);

    });

  } catch (err) {
    console.error(err);
  }
}
scrapeData();