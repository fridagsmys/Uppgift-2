const initStripe = require("../../stripe");
const fetchUsers = require("../../utils/fetchUsers");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const stripe = initStripe();

  const users = await fetchUsers();
  const userAlreadyExists = users.find((u) => u.email === email);

  if (userAlreadyExists) {
    return res.status(400).json("This user already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const stripeUser = await stripe.customers.create({
    name: name,
    email: email,
  });

  const newUser = {
    id: stripeUser.id,
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));

  req.session.user = newUser;

  res.status(201).json(newUser);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const users = await fetchUsers();
  const userExists = users.find((u) => u.email === email);

  if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
    return res.status(400).json("Wrong email or password. Please try again.");
  }

  req.session.user = userExists;

  res.status(200).json(userExists);
};

const logout = (req, res) => {
  req.session = null;
  res.status(200).json("You've been logged out");
};

const authorize = (req, res) => {
  if (!req.session.user) {
    return res
      .status(401)
      .json("Please log in to continue with your purchase.");
  }
  res.status(200).json(req.session.user.email);
};

module.exports = { register, login, logout, authorize };
