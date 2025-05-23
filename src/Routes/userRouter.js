import { Router } from "express";

const router = Router();

router.post(
    "/create_user",
    async (req, res) => {
        res.json({ message: "User created successfully" });
    }
);

export default router;