import { EntityRepository, Repository } from "typeorm";
import { Notices } from "../entities/Notices";

@EntityRepository(Notices)
class NoticesRepository extends Repository<Notices>{ }

export { NoticesRepository }