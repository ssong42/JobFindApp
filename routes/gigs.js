const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gigs');

// GET gig list
router.get('/', (req, res) =>
    Gig.findAll()
        .then(gigs => {
            console.log(gigs);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);

// Add a gig
router.get('/add', (req,res) => {
   const data =  {
       title: "Simple wordpress website",
       technologies: "wordpress, php, html",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus tempor mauris, non maximus urna lacinia nec. Morbi mollis tincidunt feugiat. Etiam ut lectus erat. Nulla euismod rutrum hendrerit. Sed sodales lorem nec massa fermentum hendrerit. Phasellus a eros eleifend, aliquam massa in, iaculis elit. Donec consequat urna a consequat aliquet. Proin a ullamcorper neque. Curabitur laoreet turpis non justo interdum consectetur. Aenean in lectus non est porta condimentum quis vitae nisi. Phasellus imperdiet tempor arcu, nec fringilla nunc lacinia a. Nulla mollis velit urna, vitae rutrum est blandit volutpat. In consectetur massa ac orci sodales tincidunt at nec arcu.",
       contact_email: "user1@gmail.com"
   };

   let { title, technologies, budget, description, contact_email } = data;
   // Insert into table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err))
});


module.exports = router;