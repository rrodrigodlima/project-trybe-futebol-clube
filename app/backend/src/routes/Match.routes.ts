import { Request, Response, Router } from 'express';
import Validations from '../middlewares/Validations';
import { MatchController } from '../controllers';

const matchController = new MatchController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => matchController.getAll(req, res),
);
router.get(
  '/?inProgress',
  (req: Request, res: Response) => matchController.getAll(req, res),
);
router.patch(
  '/:id/finish',
  Validations.token,
  (req: Request, res: Response) => matchController.finish(req, res),
);
router.patch(
  '/:id',
  Validations.token,
  (req: Request, res: Response) => matchController.update(req, res),
);
router.post(
  '/',
  Validations.token,
  Validations.validateMatch,
  (req: Request, res: Response) => matchController.create(req, res),
);

export default router;
