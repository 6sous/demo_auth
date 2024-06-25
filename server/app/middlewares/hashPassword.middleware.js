const argon2 = require("argon2");

const hashPassword = async (req, _, next) => {
  const user = req.body;

  console.log("from middleware before hashing", user);
  const { password } = user;

  try {
    const hashedPassword = await argon2.hash(password);
    user.password = hashedPassword;
    console.log("from middleware after hashing", user);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { hashPassword };
