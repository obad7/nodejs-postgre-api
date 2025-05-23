import * as userService from '../Services/userService.js';

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await userService.createUser(name, email, password);

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Error creating user',
        });
    }
};
