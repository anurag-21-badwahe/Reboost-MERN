const express = require("express");
const router = express.Router();

const {createNewUser,handleGetAllUsers,getUserById,updateUserById,deleteUserById,updateUserField} = require("../controllers/user");

router.post("/",createNewUser);

router.get("/", handleGetAllUsers);

router.get("/:id",getUserById);

// UPDATE route to update a user by ID
router.put('/:id',updateUserById);

// DELETE route to delete a user by ID
router.delete(':/id',deleteUserById)

// update specific fields of a user by ID

router.patch('/:id',updateUserField)

module.exports = router;
