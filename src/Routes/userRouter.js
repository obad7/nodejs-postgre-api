import { Router } from "express";
import * as userController from "../Controllers/userController.js";

const router = Router();

router.post(
    "/create_user",
    userController.createUser
);


export default router;