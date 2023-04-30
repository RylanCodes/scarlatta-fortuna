const jtw = require('jsonwebtoken');
const { findUserByEmail } = require('../queries/users.queries');
const { privateKey } = require('../environment/keys');

const JWT_EXPIRY = 60*5; //60 * 60 * 24 * 30  pour 1 mois

//Objectif: Vérifier si l'utilisateur existe déjà par son courriel sinon :
//Créer un nouvel utilisateur et le retourner au front-end incluant
//un jeton d'authentification en cookie
exports.sessionCreate = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      const match = await user.comparePassword(req.body.password); //FIXME
      if (match) {
        const token = jtw.sign({}, privateKey, {
          subject: user._id.toString(),
          expiresIn: JWT_EXPIRY,
          algorithm: 'RS256',
        });
        res.cookie('token', token, { maxAge: JWT_EXPIRY * 1000, HttpOnly: true }); //FIXME
        res.json(user);
      } else {
        res.json({ error: 'Bad username or password' });
      }
    } else {
      res.json({ error: 'Bad username or password' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

//Objectif: Supprimer le cookie de jeton pour déconnecter l'utilisateur
exports.sessionDelete = (req, res, next) => {
  try {
    res.clearCookie('token');
    res.end();
  } catch (error) {
    res.json({ error: error.message });
  }
};
