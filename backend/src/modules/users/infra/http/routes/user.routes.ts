import { Router } from 'express';
import multer from 'multer';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';

import SessionsController from '../controllers/SessionsController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const sessionsController = new SessionsController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', sessionsController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
