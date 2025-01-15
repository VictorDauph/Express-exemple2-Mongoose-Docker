import { Request, Response } from "express";

export function getTest(req: Request, res: Response) {
    res.send("Réponse from testRoute Get")
};

export function postTest(req: Request, res: Response) {
    try {
        //On récupère des données depuis la requête
        const isAuthorized = req.body.isAuthorized
        const data = req.body.data

        //On regarde si les données attendue sont bien présentes.
        //Si non, on envoie une erreur.
        if (isAuthorized === undefined || !data) {
            throw new Error("invalid format Data ")
        }

        //si Authorized est à false on renvoie une réponse en statut 403
        if (isAuthorized === false) {
            res.status(403)
            res.send("the request is not authorized ")
        }
        //si Authorized est à true on renvoie une réponse 
        // en statut 200 (par défaut)
        else if (isAuthorized === true) {
            res.send(data)
        }
        //Si on récupère une erreure, on la renvoie avec un statut 400 au client.
    } catch (err: any) {
        res.status(400)
        res.send(err.message)
    }
};