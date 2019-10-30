const path = require("path");
const router = require("router");
const apiRoutes = require("./api");

//Our routes
router.use("/api", apiRoutes);

//If no route is hit, return React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../Fire-Stone/build/index.html"))
});

module.exports = router;