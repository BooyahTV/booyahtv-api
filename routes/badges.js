const express = require('express'),
    router = express.Router();

const db = require('../db.js');


router.get('/:username', function (req, res) {
    const username = req.params.username

    badges = {
        "elmarceloc": [{
            title: 'Staff',
            subtitle: 'Booyah.tv dev',
            url: 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1',
            fullurl: 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/3'
        }],
        "cynthia'": {
            title: 'La tia Cynthia',
            subtitle: '<3',
            url: 'https://cdn.betterttv.net/emote/60a45c4867644f1d67e88c72/1x',
            fullurl: 'https://cdn.betterttv.net/emote/60a45c4867644f1d67e88c72/3x'
        },
        'cristianghost': {
            title: 'El cristian',
            subtitle: '',
            url: 'https://cdn.betterttv.net/emote/5f487b91b2efd65d77e8fbb7/1x',
            fullurl: 'https://cdn.betterttv.net/emote/5f487b91b2efd65d77e8fbb7/3x'
        },
       'Dylantero': {
            title: 'El dylan',
            subtitle: 'Viejas',
            url: 'https://cdn.betterttv.net/emote/60a8553a67644f1d67e8aa29/1x',
            fullurl: 'https://cdn.betterttv.net/emote/60a8553a67644f1d67e8aa29/3x'
        },
        'Facha Ghost': [
        ],
        'MoaiGr': {
            title: 'El Moai',
            subtitle: 'Oh Hell Yeah',
            url: 'https://static-cdn.jtvnw.net/emoticons/v2/3792/default/dark/1.0',
            fullurl: 'https://static-cdn.jtvnw.net/emoticons/v2/3792/default/dark/3.0'
        },
        'Exodoplays': {
            title: "El Exodo",
            subtitle: "Que se quece cabros",
            url: "https://cdn.betterttv.net/emote/60a974e167644f1d67e8b1cd/1x",
            fullurl: "https://cdn.betterttv.net/emote/60a974e167644f1d67e8b1cd/3x"
        },
        'Vicente Medina CHAD': {
            title: 'Vicente Medina',
            subtitle: 'Juega THE FOREST',
            url: 'https://i.imgur.com/W6RftUr.png',
            fullurl: 'https://i.imgur.com/W6RftUr.png'
        },
        'Nonsito': [
            {
                title: 'Primer donador de booyah tv',
                subtitle: 'POOGERS',
                url: 'https://i.imgur.com/ury4zvh.png',
                fullurl: 'https://i.imgur.com/ury4zvh.png'
            },
            {
                title: "Nonsito",
                subtitle: "Booyah.TV Artist",
                url: "https://i.imgur.com/tTEOksC.png",
                fullurl: "https://i.imgur.com/3s9aYJI.png"
            },

        ],
        "Sophia Starr": [],
        "CheemsFroger": [],
        "Cristop948": [],
        "꧁༒☬nekoSemi☬༒ৡ꧂": [],
        "PyroDrake": [],
        "MrLAIF": [],
        "Benjaxter_EZ": [],
        "Sexo rico 🥵": [],
        "kenny16c": [],
        "-Lol-": [],
        "FranciscoJr12": [],
        'Un Poco de MoaiGr': [],
        'ThePyroJr96': [],
    }


    
    db.query({ sql: 'SELECT * FROM donations'},
        function (err, dbBadges, fields) {
            if (err) throw err;
            
            dbBadges.forEach(function (badge) {
                if (!badge.title) badge.title = "Donador de booyah.tv"
                if (!badge.subtitle) badge.subtitle = "<3"

                if (!badge.badge) {
                    badge.url = "https://cdn.betterttv.net/emote/616162ffb63cc97ee6d57add/1x"
                    badge.fullurl = "https://cdn.betterttv.net/emote/616162ffb63cc97ee6d57add/3x"
                }


                if (badge.name in badges) {
                    try {
                        badges[badge.name].push(badge)
                    } catch (error) {
                        
                    }
                }else{
                    badges[badge.name] = badge
                } 


            })
            
            res.json(badges)

        });


    

})

module.exports = router;
