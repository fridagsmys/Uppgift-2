const loggedIn = (req, res, next) => {
  if (!req.session.user) {
    return res
      .status(401)
      .json("Please log in to continue with your purchase.");
  }
  next();
};

module.exports = { loggedIn };
