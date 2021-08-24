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
    const table = $("#rank");
   /* // Select all the list items in plainlist class
    // Stores data for all countries
    const countries = [];
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for each country/jurisdiction
      const country = { name: "", iso3: "" };
      // Select the text content of a and span elements
      // Store the textcontent in the above object
      country.name = $(el).children("a").text();
      country.iso3 = $(el).children("span").text();
      // Populate countries array with country data
      countries.push(country);
    });
    // Logs countries array to the console
    console.dir(countries);
    // Write countries array in countries.json file
    
    */

    var user = []
    var users = []

    $("#rank > tbody > tr > td").each((index, userCol) => {


        if(index % 4 === 0 && index != 0) {
            users.push(user)
            user = []
        }

        //console.log($(user).text());
         
      //  console.log($(user).text().trim().rstrip())

        user.push($(userCol).text().trim().replace(/\n/g, ''))

    /*    users.push({
            
        })
      */  
    });

    console.log(users)


    fs.writeFile('points.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);

    });

   //console.log(table)
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();