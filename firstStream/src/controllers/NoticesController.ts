import { Request, Response } from 'express';
import { NoticesServices } from '../services/NoticesServices';

class NoticesController {
    //private noticesServices: NoticesServices;

    constructor() {
        // this.noticesServices = new NoticesServices();
    }
    async create(request: Request, response: Response) {
        const { title, description, userId } = request.body;

        const noticesServices = new NoticesServices();

        try {
            const notices = await noticesServices.create({ title, description, userId });

            return response.status(201).json({ notices });
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }

    }

    async findAllPosts(request: Request, response: Response) {
        const noticesServices = new NoticesServices();
        const notices = await noticesServices.listAllPosts();
        return response.json({ notices });
    }

    async listNoticesById(request: Request, response: Response) {
        const noticesServices = new NoticesServices();
        const { id } = request.params;
        try {
            const notices = await noticesServices.listNoticesById(id);

            return response.status(201).json({ notices });
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { NoticesController };