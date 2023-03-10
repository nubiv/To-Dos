import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase.config';

export const checkIfAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.json({ message: 'Unauthorized' });
  }

  const token = req.headers.authorization.split(' ')[1];
  try {
    const userInfo = await admin.auth().verifyIdToken(token);

    if (userInfo) {
      return next();
    }

    return res.json({ message: 'Unauthorized' });
  } catch (e) {
    return res.json({ message: 'Internal Error' });
  }
};

export const checkIfAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.json({ message: 'Unauthorized' });
  }
  const token = req.headers.authorization.split(' ')[1];

  try {
    const userInfo = await admin.auth().verifyIdToken(token);

    if (userInfo.isAdmin) {
      return next();
    }

    return res.json({ message: 'Not an admin.' });
  } catch (e) {
    return res.json({ message: 'Internal Error' });
  }
};
