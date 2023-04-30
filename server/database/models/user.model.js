const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ItemShema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  raw_price: { type: String, required: true },
  image_url: { type: String, required: true },
});

const CartItemShema = mongoose.Schema({
  item: ItemShema,
  quantity: { type: Number, required: true },
});

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    cart: [CartItemShema],
    purchases: { type: Array, default: [] },
    details: { type: Array, default: [] },
  },
  { timestamps: true }
);

//Objectif: Obtenir une fonction statique pour hacher le mot de passe
userSchema.statics.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (e) {
    throw e;
  }
};

//Objectif: Pouvoir comparer le mot de passe haché du l'utilisateur en cours
//avec le mot de passe non-haché fourni par le front-end
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
