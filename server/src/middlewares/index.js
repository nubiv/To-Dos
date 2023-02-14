import admin from '../config/firebase.config.js';

export const checkIfAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const userInfo = await admin.auth().verifyIdToken(token);

    if (userInfo) {
      console.log(userInfo);
      return next();
    }

    return res.json({ message: 'Unauthorized' });
  } catch (e) {
    return res.json({ message: 'Internal Error' });
  }
};

export const checkIfAdmin = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const userInfo = await admin.auth().verifyIdToken(token);

    if (userInfo.isAdmin) {
      console.log(userInfo);
      return next();
    }

    return res.json({ message: 'Not an admin.' });
  } catch (e) {
    return res.json({ message: 'Internal Error' });
  }
};
