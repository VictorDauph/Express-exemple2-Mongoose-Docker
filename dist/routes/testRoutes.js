"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testControllers_1 = require("../controlers/testControllers");
//Création d'un sous-router
const router = express_1.default.Router();
//Création d'un endpoint lié au sous-router
router.get('/', testControllers_1.getTest);
router.post('/', (req, res) => {
    res.send(req.body);
});
//export du sous-router
exports.default = router;
//# sourceMappingURL=testRoutes.js.map