// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// URL of the page we want to scrape
const channels = ["moaigr", "cristianghost", "dylantero","xcry"];

// Async function which scrapes the data
async function scrapeData(channel) {
  try {
    // Fetch HTML of the page we want to scrape
    let { data } = await axios.get(
      "https://streamvip.app/" + channel + "/rank"
    );
    // Load HTML we fetched in the previous line
    var $ = cheerio.load(data);

    var user = [];
    var users = [];

    $("#rank > tbody > tr > td").each((index, userCol) => {
      if (index % 4 === 0 && index != 0) {
        users.push(user);
        user = [];
      }

      user.push($(userCol).text().trim().replace(/\n/g, ""));
    });

    users.map((user, index) => {
      if (channel == "cristianghost" && index < 10) {
        user[4] = "https://cdn.betterttv.net/emote/6084c23739b5010444d05b6d/3x";
        user[5] = "CHAD";
      }
      if (channel == "dylantero" && index == 0) {
        user[4] =
          "https://static-cdn.jtvnw.net/emoticons/v2/304145479/default/dark/1.0";
        user[5] = "dylanteroStonks";
      }
      if (channel == "dylantero" && index == 1) {
        user[4] =
          "https://static-cdn.jtvnw.net/emoticons/v2/858001/default/dark/3.0";
        user[5] = "dylanteroLUL";
      }
      if (channel == "dylantero" && index == 2) {
        user[4] =
          "https://static-cdn.jtvnw.net/emoticons/v2/669670/default/dark/3.0";
        user[5] = "dylanteroPlata2";
      }
      if (channel == "moaigr" && index < 3) {
        user[4] = "https://cdn.betterttv.net/emote/6044e31b306b602acc598811/3x";
        user[5] = "BASED";
      }
    });

    //console.log(users);

    fs.writeFile(
      "points/" + channel + ".json",
      JSON.stringify(users),
      function (err) {
        if (err) return console.log(err);
      }
    );
  } catch (err) {
    console.error(err);
  }

  try {
    // Obtenemos los datos de la tabla de "top de fogatas"
    let { data } = await axios.get(
      "https://streamvip.app/" + channel + "/statistics?t=2"
    );
    // Les aplicamos cheerio para poder leer mas facil los datos
    $ = cheerio.load(data);

    user = [];
    users = [];

    $("#rank > tbody > tr > td").each((index, userCol) => {
      if (index % 4 === 0 && index != 0 && index <= 25 * 4) {
        users.push(user);
        user = [];
      }

      user.push($(userCol).text().trim().replace(/\n/g, ""));
    });

    users.map((user, index) => {
      // poner el FOGATA.png al top 10
      if (index < 10) {
        user[4] = "https://cdn.betterttv.net/emote/6120182076ea4e2b9f7861b4/3x";
        user[5] = "FOGATA";
      }
    });

    //console.log(users);

    // guardamos los datos en un archivo, para su posterior uso

    fs.writeFile(
      "bonfires/" + channel + ".json",
      JSON.stringify(users),
      function (err) {
        if (err) return console.log(err);
      }
    );
  } catch (err) {
    console.error(err);
  }
  // TOP CHATTERS

  try {
    let { data } = await axios.get(
      "https://streamvip.app/" + channel + "/statistics?t=3"
    );

    $ = cheerio.load(data);

    user = [];
    users = [];

    $("#rank > tbody > tr > td").each((index, userCol) => {

      if (index % 4 === 0 && index != 0 && index <= 35 * 4) {
        users.push(user);
        user = [];
      }

      user.push($(userCol).text().trim().replace(/\n/g, ""));
    });

    users.map((user, index) => {
      if (index < 10) {
        user[4] = "https://cdn.betterttv.net/emote/60f067db8ed8b373e4222dfc/3x";
        user[5] = "CHATTING";
      }
    });

    // if the top 1 user is streamvip, remove it

    // console.log(users[0])

   /* if(users[0][1] = 'StreamVip'){
      users.splice(0, 1);
    }*/

    //console.log(users);

    // guardamos los datos en un archivo, para su posterior uso

    fs.writeFile(
      "chatters/" + channel + ".json",
      JSON.stringify(users),
      function (err) {
        if (err) return console.log(err);
      }
    );
  } catch (err) {
    console.error(err);
  }
}

channels.forEach((channel) => {
  scrapeData(channel);
});
