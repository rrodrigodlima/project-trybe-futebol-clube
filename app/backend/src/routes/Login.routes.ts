import { Request, Response, Router } from 'express';
import { UserController } from '../controllers';
import Validations from '../middlewares/Validations';

const userController = new UserController();
const router = Router();

router.post(
  '/',
  Validations.validateFields,
  Validations.validateUser,
  (req: Request, res: Response) => {
    userController.login(req, res);
  },
);

export default router;
