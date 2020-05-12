import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmensRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findApponintmentInSameDate = await appointmensRepository.findByDate(
      appointmentDate,
    );

    if (findApponintmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = appointmensRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmensRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
