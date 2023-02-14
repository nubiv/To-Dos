import admin from '../config/firebase.config.js';

export const makeUserAdmin = async (req, res) => {
  const { uid } = req.body;

  await admin.auth().setCustomUserClaims(uid, { isAdmin: true });

  return res.send({ message: 'Successfully promoted.' });
};

export const fetchAllUsers = async (req, res) => {};
