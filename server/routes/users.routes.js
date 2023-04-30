const router = require("express").Router();
const {
  signup,
  fetchCurrentUser,
  updateCurrentUserCartController,
  updateCurrentUserDetailsController,
} = require("../controllers/users.controller");

router.post("/", signup);
router.get("/", fetchCurrentUser);
router.patch("/", updateCurrentUserCartController);
router.patch("/profile", updateCurrentUserDetailsController);

module.exports = router;
