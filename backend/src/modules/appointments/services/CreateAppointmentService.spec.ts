import AppError from '@shared/errors/AppError';
import FakeAppointsRepository from '../repositories/fakes/FakeAppointsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('shold be able to create a new appointment', async () => {
    const fakeAppointmentService = new FakeAppointsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentService,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1231311',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1231311');
  });

  it('shold not be able to create two appointments on the same time', async () => {
    const fakeAppointmentService = new FakeAppointsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentService,
    );

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
