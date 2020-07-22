const express = require("express")
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const db = require('./database/db');
const routes = require("./routes");
const userRoutes = require('./routes/Users');
const { User } = require('./models');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (user && await user.verifyPassword(password)) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      console.log('err==>>>', err);
      done(err);
    }
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (user) return done(null, user);
    done(null, false);
  } catch (err) {
    done(err);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
app.use('/user', userRoutes)

// If no API routes are hit, send the React app
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

db.sequelize.sync().then(() => {
  console.log('Tables synced!')
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
}).catch(err => console.log('error creating tables===>>>', err));