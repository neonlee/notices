import { UsersServices } from "../services/UsersServices";
import { Request, Response } from 'express';

class UsersController {


    async create(request: Request, response: Response) {
        const { name, username, email } = request.body;

        const usersServices = new UsersServices();

        try {
            const users = await usersServices.create({ name, username, email });

            return response.status(201).json({ users });
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }

    }
}

export { UsersController }