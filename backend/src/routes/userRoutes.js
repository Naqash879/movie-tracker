import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.patch("/:id/password", UserController.updatePassword);
router.delete("/:id", UserController.deleteUser);
router.post("/login", UserController.loginUser);

export default router;
