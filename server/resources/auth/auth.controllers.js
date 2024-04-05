const fetchUsers = require("../../utils/fetchUsers");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const users = await fetchUsers();
  const userAlreadyExists = users.find((u) => u.email === email);

  if (userAlreadyExists) {
    return res.status(400).json("This user already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };
  users.push(newUser);
  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));

  res.status(201).json(newUser.email);
};

const login = async (req, res) => {
  const { name, email, password } = req.body;

  const users = await fetchUsers();
  const userExists = users.find((u) => u.email === email);

  if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
    return res.status(400).json("Wrong email or password. Please try again.");
  }

  
};

module.exports = { register, login };
