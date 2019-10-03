const express = require("express");

const routes = express.Router();

const SessionController = require("../app/controllers/SessionController");
const SpotController = require("../app/controllers/SpotController");

routes.post("/sessions", SessionController.store);

routes.post("/spots", SpotController.store);

module.exports = routes;
