import { getCustomRepository } from "typeorm";
import { UsersRepositorys } from "../repositories/UsersRepository";

interface IUsers {
    name: string;
    username: string;
    email: string;
}

class UsersServices {
    private usersRepository: UsersRepositorys;

    constructor() {
        //this.usersRepository = getCustomRepository(UsersRepositorys);
    }

    async create({ name, username, email }: IUsers) {
        const usersRepository = getCustomRepository(UsersRepositorys);

        const userExist = await usersRepository.findOne({ email });
        if (userExist) {
            throw new Error("User Exist");
        }

        const user = usersRepository.create({ email, name, username });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersServices }