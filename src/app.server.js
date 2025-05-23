import { json } from "express";
import userRouter from "./Routes/userRouter.js";

export const bootstrap = async (app, express) => {
    app.use(express.json());

    app.use("/user", userRouter);

};

export default bootstrap;