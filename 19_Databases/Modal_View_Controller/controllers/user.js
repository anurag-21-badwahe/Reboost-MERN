const User = require("../models/user");

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
  handleGetAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
