import { Router } from "express";
import * as userController from "../Controllers/userController.js";
import {validation} from "../Middlewares/validationMiddleware.js";
import * as userValidation from "../Validation/userValidation.js";

const router = Router();

router.post(
    "/create_user",
    validation(userValidation.createUserSchema),
    userController.createUser
);

router.get(
    '/get_all_users',
    userController.getAllUsers
);

export default router;