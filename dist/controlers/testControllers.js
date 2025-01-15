"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTest = getTest;
exports.postTest = postTest;
function getTest(req, res) {
    res.send("Réponse from testRoute Get");
}
;
function postTest(req, res) {
    try {
        const isAuthorized = req.body.isValid;
        const data = req.body.data;
        if (!isAuthorized) {
            res.status(403);
            return res.send("the request is not authorized ");
        }
        else {
            res.send(data);
        }
    }
    catch (err) {
        res.status(400);
        res.send("invalid format Data ");
    }
}
;
//# sourceMappingURL=testControllers.js.map