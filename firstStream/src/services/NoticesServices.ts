import { getCustomRepository } from "typeorm";
import { NoticesRepository } from "../repositories/NoticesRepository";
import { UsersRepositorys } from "../repositories/UsersRepository";

interface INotices {
    title: string;
    description: string;
    userId: string;
}

class NoticesServices {
    private noticesRepository: NoticesRepository;

    constructor() {
        this.noticesRepository = getCustomRepository(NoticesRepository);
    }

    async create({ title, description, userId }: INotices) {
        const usersRepository = getCustomRepository(UsersRepositorys);

        this.noticesRepository = getCustomRepository(NoticesRepository);


        const noticesExist = await usersRepository.findOne({ id: userId });
        if (!noticesExist) {
            throw new Error("User don't Exist");
        }

        const notices = this.noticesRepository.create({ title, description, userId });

        await this.noticesRepository.save(notices);

        return notices;
    }

    async listAllPosts() {
        this.noticesRepository = getCustomRepository(NoticesRepository);
        const allNotices = await this.noticesRepository.find();
        return allNotices;
    }

    async listNoticesById(id: string) {
        const listNotices = this.noticesRepository.findOne({ id });

        if (!listNotices) {
            throw new Error("don't Exist notices");
        }

        return listNotices;
    }
}

export { NoticesServices };