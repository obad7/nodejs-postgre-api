import userRouter from "./Routes/userRouter.js";
import pool from "./DB/connection.js";

export const bootstrap = async (app, express) => {
    app.use(express.json());

    app.use("/user", userRouter);

};

export default bootstrap;