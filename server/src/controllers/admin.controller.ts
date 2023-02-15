import { Request, Response } from 'express';
import admin from '../config/firebase.config';

export const makeUserAdmin = async (req: Request, res: Response) => {
  const { uid } = req.body;

  await admin.auth().setCustomUserClaims(uid, { isAdmin: true });

  return res.send({ message: 'Successfully promoted.' });
};

export const fetchAllUsers = async (req: Request, res: Response) => {};
