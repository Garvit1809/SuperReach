const router = require("express").Router();
const {register, login, setProfile } = require('../Controllers/auth')
 
router.post("/register", register);
router.post("/login", login);
router.post("/profile/:id", setProfile)

module.exports = router;