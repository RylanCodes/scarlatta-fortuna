const {
  createUser,
  findUserByEmail,
  findUserByID,
  updateCurrentUserCart,updateCurrentUserDetails/*, updateCurrentUserPurchase*/
} = require("../queries/users.queries");
const { publicKey } = require("../environment/keys"); //FIXME
const jtw = require("jsonwebtoken");

//Objectif: Vérifier si l'utilisateur existe déjà par son courriel
exports.verifyEmail = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.params.email);
    res.send(user ? { email: user.email } : null);
  } catch (err) {
    next(err);
  }
};

//Objectif: Créer un nouvel utilisateur et le retourner au front-end
exports.signup = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
};

//Objectif: Vérifier si l'utilisateur demandé a un jeton valide et
//retourner les données de l'utilisateur s'il y a lieu.
exports.fetchCurrentUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token) {
      jtw.verify(token, publicKey, async (error, decoded) => {
        //FIXME
        if (!error) {
          const user = await findUserByID(decoded.sub);
          if (user) {
            res.json(user);
            return;
          }
        } else {
          res.clearCookie("token");
          res.json(null);
        }
      });
    } else {
      res.json(null);
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
};

exports.updateCurrentUserCartController = async (req, res, next) => {
  try {
    console.log("Inner controller");
    console.log(req.body.cart);
    await updateCurrentUserCart(req.body.email, req.body.cart);
    res.json({ msg: "Panier sauvegarde" });
  } catch (err) {
    next(err);
  }
};


exports.updateCurrentUserDetailsController = async (req, res, next) => {
  try {
    console.log("Inner controller details");
    console.log(req.body.details);
    await updateCurrentUserDetails(req.body.email, req.body.details);
    console.log("Panier sauvegarde");
    res.json({ msg: "Panier sauvegarde" });
  } catch (err) {
    next(err);
  }
};