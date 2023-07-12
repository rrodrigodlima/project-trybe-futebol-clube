import { NextFunction as Next, Request, Response } from 'express';
import ICrypt from '../interfaces/ICrypt';
import { IUserModel } from '../interfaces/User';
import { UserModel } from '../models';
import { CryptService, TokenService } from '../services';
import { ITokenService } from '../interfaces/Token';
import Team from '../database/models/SequelizeTeam';

const error = { message: 'Invalid email or password' };

export default class Validations {
  static validateFields(req: Request, res: Response, next: Next): Response | void {
    const { email, password } = req.body;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
    if (!emailRegex.test(email) || password.length < 6) {
      return res.status(401).json(error);
    }

    next();
  }

  static async validateUser(req: Request, res: Response, next: Next): Promise<Response | void> {
    const userModel: IUserModel = new UserModel();
    const crypt: ICrypt = new CryptService();
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json(error);
    }
    const isValidPassword = await crypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json(error);
    }
    res.locals.user = user;
    next();
  }

  static async token(req: Request, res: Response, next: Next): Promise<Response | void> {
    const tokenService: ITokenService = new TokenService();
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const user = await tokenService.verifyToken(authorization);

    if (!user) return res.status(401).json({ message: 'Token must be a valid token' });
    res.locals.user = user;
    next();
  }

  static async validateMatch(req: Request, res: Response, next: Next): Promise<Response | void> {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const homeTeam = await Team.findByPk(homeTeamId);
    const awayTeam = await Team.findByPk(awayTeamId);

    if (!homeTeam || !awayTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    next();
  }
}
