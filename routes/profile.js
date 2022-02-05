const db = require("../db.js");
const utils = require("../utils.js");

const titleMaxLength = 32;
const subtitleMaxLength = 32;

const express = require("express"),
  router = express.Router();

function removeEmojis(text) {
  return text
    .replace(
      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
      ""
    )
    .trim();
}

router.get("/preferences", function (req, res) {
  var { nickname } = req.query;

  db.query(
    { sql: 'SELECT * FROM donations WHERE name like "%' + nickname + '%" ' },
    function (err, users, fields) {
      if (err) throw err;

      // if the user is not found
      if (users.length == 0) {
        res.json({ success: false });
        return;
      }

      console.log("User found", users[0]);

      res.json({
        success: true,
        preferences: users[0],
      });
    }
  );
});

// https://booyah.live/settings/accounts (panel de customisacion)

router.post("/edit", function (req, res) {
  var { nickname, newColor, badgeUrl, title, subtitle } = req.body;

  console.log(nickname, newColor, badgeUrl);

  var success = false;

  if (
    !nickname ||
    !newColor ||
    !badgeUrl ||
    title.length > titleMaxLength ||
    subtitle.length > subtitleMaxLength
  ) {
    res.json({ success: success });
    return;
  }

  var nick = removeEmojis(nickname);

  var badge = utils.getEmote(badgeUrl);

  if (!badge && badgeUrl != "") {
    console.log("is emote", badge);
    console.log("is default", badgeUrl);
    res.json({ success: success });
    return;
  }
  // TODO: check sql injection

  db.query(
    { sql: 'SELECT * FROM donations WHERE name like "%' + nick + '%"' },
    function (err, users, fields) {
      if (err) throw err;

      // if the user is not found
      if (users.length == 0) {
        console.log('user not found')
        res.json({ success: success });
        return;
      }

      console.log("User found", users[0]);

      db.query(
        {
          sql: 'SELECT * FROM pending_donations WHERE name like "%' + nick + '%" ',
        },
        function (err, users, fields) {
          if (err) throw err;
          // si el usuario ya tiene una donacion pendiente
          if (users.length != 0) {
            db.query(
              {
                sql: "UPDATE pending_donations SET color = ?, badge = ?, badge_source = ?, title = ?, subtitle = ? WHERE name like ? LIMIT 1",
                values: [
                  newColor,
                  badge.id,
                  badge.source,
                  title,
                  subtitle,
                  "%" + nickname + "%",
                ],
              },
              function (err) {
                if (!err) success = true;
                console.log(err)



                db.query({ sql: 'UPDATE pending_donations SET approved = 0 WHERE name like "%' + nick + '%" LIMIT 1'},
                function (err) {
                    if (err) throw err;

                    res.json({ success: success });

                })

              }
              //se han enviado a revisión sus datos
            );
          } else {
            db.query(
              {
                sql: "INSERT INTO pending_donations (name,twitch_name, color, badge, badge_source, title, subtitle) VALUES (?, ?, ?, ?, ?, ?,?)",
                values: [
                  nick,
                  nick,
                  newColor,
                  badge.id,
                  badge.source,
                  title,
                  subtitle,
                ],
              },
              function (err) {
                if (!err) success = true;
                console.log(err)
                res.json({ success: success });
              }
            );
            //se han enviado a revisión sus datos
          }
        }
      );
    }
  );
});

module.exports = router;
