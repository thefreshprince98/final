const express = require("express");
const router = express.Router();
const passport = require('passport');
const { User } = require("../models");

process.env.SECRET_KEY = 'secret';

//sign up with email, username, password
//hides password in database using bcrypt
router.post("/signup", async (req, res) => {
    console.log('req body', req.body);
    const { email, password} = req.body;
    try {
        let user = await User.findOne({ where: { email } });
        if (user) {
            res.send({error: 'User already exist'});
        } else  {
            req.body.password = await User.hashPassword(password);
            user = await User.create(req.body);
            res.status(201).send(user);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/login", passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => res.send({success: 'Login Successful'})
);

module.exports = router;
