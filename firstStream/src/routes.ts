import { Router } from 'express';
import { NoticesController } from './controllers/NoticesController';
import { UsersController } from './controllers/UsersController';


const router = Router();

const userController = new UsersController();
const noticiesController = new NoticesController();

router.post("/users", userController.create);

router.post("/notices", noticiesController.create);

router.get("/notices", noticiesController.findAllPosts)


router.get("/notices/:id", noticiesController.listNoticesById)

export { router }