import { EntityRepository, Repository } from 'typeorm';

import Appoinstment from '../models/Appointment';

@EntityRepository(Appoinstment)
class AppoinstmentsRepository extends Repository<Appoinstment> {
  public async findByDate(date: Date): Promise<Appoinstment | null> {
    const findApponintment = await this.findOne({
      where: { date },
    });

    return findApponintment || null;
  }
}

export default AppoinstmentsRepository;
