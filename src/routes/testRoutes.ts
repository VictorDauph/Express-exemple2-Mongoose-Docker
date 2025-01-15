import express, { Request, Response } from 'express';
import { getTest, postTest } from '../controlers/testControllers';
//Création d'un sous-router
const router = express.Router();

//Création d'un endpoint lié au sous-router
router.get('/', getTest)

router.post('/', postTest)

//export du sous-router
export default router;