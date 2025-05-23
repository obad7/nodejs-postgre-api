import { Router } from "express";
import * as userController from "../Controllers/userController.js";

const router = Router();

router.post(
    "/create_user",
    userController.createUser
);

router.get(
    '/get_all_users',
    userController.getAllUsers
);

export default router;