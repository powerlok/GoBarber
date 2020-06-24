import AppError from '@shared/errors/AppError';
import FakeAppointsRepository from '../repositories/fakes/FakeAppointsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointsRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);
  });

  it('shold be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1231311',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1231311');
  });

  it('shold not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '1231311',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '1231311',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
