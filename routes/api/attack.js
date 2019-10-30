const router = require("express").Router();
const attackController = require("../../controllers/attackController");

router.route("/")
    .get(attackController.findAll)
    .post(attackController.create);

//CRUD Routes
router
    .route("/:id")
    .get(attackController.findById)
    .put(attackController.update)
    .delete(attackController.remove);

module.exports = router;