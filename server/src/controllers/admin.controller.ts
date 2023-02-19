import { Request, Response } from 'express';
import admin from '../config/firebase.config';

export const fetchAllUsers = async (req: Request, res: Response) => {
  // List batch of users, 1000 at a time.
  const userList = await admin.auth().listUsers(1000);

  return res.send(userList);
};

export const updateUserAuthorization = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const { isAdmin } = req.body;
  console.log(isAdmin);

  await admin.auth().setCustomUserClaims(userId, { isAdmin: isAdmin });

  return isAdmin
    ? res.send({ message: 'Successfully promoted.' })
    : res.send({ message: 'Successfully demoted.' });
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  console.log(userId);

  await admin.auth().deleteUser(userId);
  // to-do: delete the user's record in firebase database

  return res.send({ message: 'Successfully deleted user.' });
};
