const router = require("express").Router();
const characterController = require("../../controllers/characterController");

router.route("/")
    .get(characterController.findAll)
    .post(characterController.create);

//CRUD Routes
router
    .route("/:id")
    .get(characterController.findById)
    .put(characterController.update)
    .delete(characterController.remove);

module.exports = router;