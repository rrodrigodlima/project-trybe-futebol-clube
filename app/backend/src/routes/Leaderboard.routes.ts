import { Request, Response, Router } from 'express';
import { LeaderboardController } from '../controllers';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getHome(req, res),
);
router.get(
  '/away',
  (req: Request, res: Response) => leaderboardController.getAway(req, res),
);
router.get(
  '/',
  (req: Request, res: Response) => leaderboardController.getAll(req, res),
);

export default router;
