import express from 'express';
import { getTest, postTest } from '../controlers/testControllers';
import { getAllTodos } from '../controlers/todoControllers';
//Création d'un sous-router
const router = express.Router();

//Création d'un endpoint lié au sous-router
router.get('/', getAllTodos)



//export du sous-router
export default router;