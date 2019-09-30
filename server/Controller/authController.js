const bcrypt = require("bcrypt");

module.exports = {
  registerUser: async (req, res, next) => {
    const { email, password, username } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.find_user_by_email(email);
    console.log(db);
    console.log(db.user);
    if (foundUser.length) {
      req.status(400).send("user already has email");
    } else {
      const saltRound = 12;
      const salt = await bcrypt.genSalt(saltRound);
      const hashPassword = await bcrypt.hash(password, salt);
      const newUser = await db.users.save({
        email,
        password: hashPassword,
        username: username
      });

      req.session.user = newUser;
      res.status(200).send(req.session.user);
    }
  },

  loginUser: async (req, res, next) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    console.log("hit-login");
    const foundUser = await db.users.find({ email });
    console.log(foundUser);
    if (!foundUser.length) {
      res.status(404).send("user not registered");
    } else {
      const authenticated = await bcrypt.compare(
        password,
        foundUser[0].password
      );
      if (authenticated) {
        req.session.user = {
          id: foundUser[0].id,
          email: foundUser[0].email,
          userName: foundUser[0].userName
        };

        res.status(200).send(req.session.user);
      } else {
        res.status(404).send("user not found");
      }
    }
  }
};
