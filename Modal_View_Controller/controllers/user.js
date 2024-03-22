const User = require("../models/user");

const createNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    first_name: body.firstName,
    last_name: body.lastName,
    email: body.email,
    gender: body.gender,
  });

  return res.status(200).json({msg : "User Created Succesfully",id : result._id})
};

const handleGetAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};

const getUserById = async (req, res) => {
  const reqId = req.params.id;
  const mydata = data.find((item) => {
    return item._id.$oid === reqId;
  });

  if (!mydata) {
    res.status(404).send("Data not found");
  } else {
    res.send(mydata.title);
  }
};

const updateUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.json({ message: "User updated successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);

  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const updateUserField = async (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedFields = req.body;

  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    // Update only the specified fields
    Object.assign(users[index], updatedFields);
    res.json({ message: "User updated successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  createNewUser,
  handleGetAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  updateUserField,
};
