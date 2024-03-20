const express = require("express");
const { handleGetAllUsers } = require("../controllers/user");
const router = express.Router();

const {handleGetAllUsers,getUserById,updateUserById,deleteUserById,updateUserField} = require("../controllers/user");

router.get("/", handleGetAllUsers);

router.get("/:id",getUserById);

// UPDATE route to update a user by ID
router.put('/:id',updateUserById);

// DELETE route to delete a user by ID
router.delete(':/id',deleteUserById)

// update specific fields of a user by ID

router.patch('/:id',updateUserField)

module.exports = router;
