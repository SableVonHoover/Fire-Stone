const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.create)
    //Route for updating user with character they selected
    .put(userController.updateCharacter);

//CRUD Routes
router
    .route("/:id")
    .get(userController.findById)
    // .put(userController.update)
    .delete(userController.remove);

module.exports = router;