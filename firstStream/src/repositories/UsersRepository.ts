import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";

@EntityRepository(Users)
class UsersRepositorys extends Repository<Users> { }

export { UsersRepositorys }