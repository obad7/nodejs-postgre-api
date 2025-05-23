import userRouter from "./Routes/userRouter.js";
import pool from "./DB/connection.js";

export const bootstrap = async (app, express) => {
    app.use(express.json());

    app.use("/user", userRouter);

    app.use((err, req, res, next) => {
        res.status(err.cause || 500).json({
            success: false,
            message: err.message || "Internal Server Error",
        });
    });

};

export default bootstrap;