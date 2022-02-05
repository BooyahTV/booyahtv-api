require('dotenv').config()
const express = require('express'),
    router = express.Router();

const utils = require('../utils.js');

const db = require('../db.js');


router.get('/donations', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    db.query({ sql: 'SELECT * FROM donations' },
    function (err, results, fields) {
        if (err) throw err;

        res.render('pages/donations',{
            donations: results
        })
    });

    
})


router.post('/donations', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const twitch = req.body.twitch
    const booyah = req.body.booyah

    db.query({ sql: 'INSERT INTO donations (name, twitch_name) VALUES (?, ?)',values: [booyah, twitch] },
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/donations')

    });


})

router.post('/donations/delete', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id

    db.query({ sql: 'DELETE FROM donations WHERE id = ?',values: [id] },
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/donations')

    });
    

})


router.post('/donations/edit', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id

    
    const name = req.body.name

    const badge = req.body.badge
    const badge_source = req.body.badge_source

    const title = req.body.title
    const subtitle = req.body.subtitle

    db.query({ sql: 'UPDATE donations SET badge = ?, badge_source = ?, title = ?, subtitle = ?, name = ? WHERE id = ?',values: [ badge, badge_source, title, subtitle, name , id ]}, 
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/donations')

    });

})


router.get('/pending_donations', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    db.query({ sql: 'SELECT * FROM pending_donations' },
    function (err, results, fields) {
        if (err) throw err;

        res.render('pages/pending_donations',{
            donations: results
        })
    });

    
})



router.post('/pending_donations/delete', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id

    db.query({ sql: 'DELETE FROM pending_donations WHERE id = ?',values: [id] },
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/pending_donations')

    });
    

})


router.post('/pending_donations/edit', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id

    
    const name = req.body.name

    const badge = req.body.badge
    const badge_source = req.body.badge_source

    const title = req.body.title
    const subtitle = req.body.subtitle

    db.query({ sql: 'UPDATE pending_donations SET badge = ?, badge_source = ?, title = ?, subtitle = ?, name = ? WHERE id = ?',values: [ badge, badge_source, title, subtitle, name , id ]}, 
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/pending_donations')

    });

})

router.post('/pending_donations/approved', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id;


  // Checkiamos si esta en la tabla pending_donations
  db.query(
    { sql: 'SELECT * FROM pending_donations WHERE id = ?',values: [id] },
    function (err, users, fields) {
      if (err) throw err;

      // if the user is not found
      if (users.length == 0) {
        res.redirect('/dashboard/pending_donations')
        return;
      }
      

    // cambiamos el estado de la donacion pendiente a aprovado
    db.query({ sql: 'UPDATE pending_donations SET approved = 1 WHERE id = ?',values: [id] },
    function (err) {
        if (err) throw err;
        //buscamos la donación 
        db.query(
            {
              sql: 'SELECT * FROM pending_donations WHERE id = ?',values: [id],
            },
            function (err, donations, fields) {
              if (err) throw err;
              // si existe agregamos la donacion a donations
              if (donations.length != 0) {
                console.log('actualisando donacion')
                console.log( users[0].name)
  
                db.query(
                  {
                    sql: "UPDATE donations SET color = ?, badge = ?, badge_source = ?, title = ?, subtitle = ? WHERE name like '%" + users[0].name + "%' LIMIT 1",
                    values: [
                        donations[0].color,
                        donations[0].badge,
                        donations[0].badge_source,
                        donations[0].title,
                        donations[0].subtitle,
                    ],
                  },
                  function (err) {
                    res.redirect('/dashboard/pending_donations')
                  }
                )
              }else{
                console.log('insertando donacion')
                db.query(
                    {
                      sql: "INSERT INTO donations (color, badge, badge_source, title, subtitle) VALUES (?, ?, ?, ?, ?, ?)",
                      values: [
                        donations[0].color,
                        donations[0].badge.id,
                        donations[0].badge.source,
                        donations[0].title,
                        donations[0].subtitle,
                        id,
                      ],
                    },
                    function (err) {
                      if (!err) success = true;
                      res.redirect('/dashboard/pending_donations')
                    }
                  );
              }
            }
          );


    });
        
      console.log("User found", users[0]);


    }
  );







    

})





router.get('/emotes', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    db.query({ sql: 'SELECT * FROM emotes' },
    function (err, emotes, fields) {
        if (err) throw err;

        res.render('pages/emotes',{
            emotes: emotes
        })
    });

    
})


router.post('/emote/edit', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id

    const name = req.body.name

    const link = req.body.link
    const name_streamer = req.body.name_streamer


    var emote = utils.getEmote(link)

    db.query({ sql: 'UPDATE emotes SET id = ?, source = ?, name = ?, name_streamer = ? WHERE emote_id = ?',values: [ emote.id, emote.source, name, name_streamer, id]}, 
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/emotes')

    });
    

})

router.post('/emote/delete', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const id = req.body.id

    db.query({ sql: 'DELETE FROM emotes WHERE emote_id = ?',values: [id] },
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/emotes')

    });
    
})

router.post('/emote', function(req, res){
    if (!req.session.loggedIn) return res.redirect("/login");

    const name = req.body.name
    const name_streamer = req.body.name_streamer
    const link = req.body.link

    var emote = utils.getEmote(link)

    db.query({ sql: 'INSERT INTO emotes (id, source, name, name_streamer) VALUES (?, ?, ?, ?)',values: [emote.id, emote.source, name, name_streamer] },
    function (err) {
        if (err) throw err;
    
        res.redirect('/dashboard/emotes')

    });
    

})


module.exports = router;