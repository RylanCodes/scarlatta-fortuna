const ITEM_IMAGE_PATH = "/images/items/";
const User = require("../database/models/user.model");

//Objectif: Récupérer les données de l'utilisateur par son ID
exports.findUserByID = (id) => {
  return User.findById(id).select("-password");
};

//Objectif: Récupérer les données de l'utilisateur par son courriel
exports.findUserByEmail = (email) => {
  return User.findOne({ "email": email });
};

//Objectif: Créer un nouvel utilisateur avec mot de passe haché
exports.createUser = async (data) => {
  const user = await this.findUserByEmail(data.email);
  if (user) throw new Error("Courriel déjà utilisé");

  const hashedPassword = await User.hashPassword(data.password);
  const newUser = new User({
    name: data.name,
    
      email: data.email,
      password: hashedPassword,
   
  });
  return newUser.save();
};

//permet de faire la maj de user en lui ajoutant le panier c
exports.updateCurrentUserCart = (email, cart) => {
  return User.findOneAndUpdate(
    { email: email },
    { $set: { cart: cart } },
    { runValidators: true, new: true }
  );
};

//permet de faire la maj de user en lui ajoutant ses ses info personnels
exports.updateCurrentUserDetails = (mail,details) => {
  return User.findOneAndUpdate(
    { email: mail },
    { $set: { details:details} },
    { runValidators: true, new: true }
  );
};