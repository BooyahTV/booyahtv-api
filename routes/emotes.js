const express = require('express'),
    router = express.Router();

const db = require('../db.js'); // db is pool

const channelWhitelist = ['puvloo', 'donsebastianlive', 'suwie', 'cristianghost', 'moaigr',
    'dylanterolive', 'latesitoo', 'jaidefinichon', 'maau', 'aedrons_tv',
    'elmarceloc','astini','xcry']

router.get('/:username', function (req, res) {
    const username = req.params.username

    if (!channelWhitelist.includes(username)) return

    // obtener emotes

    db.query({ sql: 'SELECT * FROM emotes WHERE name_streamer = ?', values: [username] },
        function (err, emotes, fields) {
            if (err) throw err;

            res.json({
                emotes: emotes
            })
        });


})


router.post('/add/:username', function (req, res) {
    const username = req.params.username
    const newEmote = req.body;


    db.query({ sql: 'SELECT * FROM emotes WHERE name_streamer = ?', values: [username] },
        function (err, emotes, fields) {
            if (err) throw err;

            var hasEmote = false;

            for (let i = 0; i < emotes.length; i++) {

                if (emotes[i].id == newEmote.id) {
                    hasEmote = true;
                    break
                }

            }
            if (!hasEmote) {
                emotes.push(newEmote)

                console.log(emotes)

                db.query({
                    sql: "INSERT INTO `emotes` ( `id`, `source`, `name`, `name_streamer`,`width`, `height`) VALUES (?, ?, ?, ?, ?, ?)",

                    values: [
                        newEmote.id,
                        newEmote.source,
                        newEmote.name,
                        username,
                        newEmote.width,
                        newEmote.height
                    ]
                },

                    function (err, result) {
                        if (err) throw err;

                        res.json({})


                    });

            }


        });

})

router.post('/remove/:username', function (req, res) {
    const targetEmote = req.body;

    var sql = "DELETE FROM emotes WHERE id = '" + targetEmote.id + "'";

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.json({})

    });

})

module.exports = router;