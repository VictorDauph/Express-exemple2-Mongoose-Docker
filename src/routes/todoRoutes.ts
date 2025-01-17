import express from 'express';
import { createTodo, getAllTodos, getfalseTodos, modifyTodo } from '../controlers/todoControllers';
//Création d'un sous-router
const router = express.Router();

//Création d'un endpoint lié au sous-router
router.get('/', getAllTodos)

router.get('/false', getfalseTodos)

router.post('/', createTodo)

router.put('/:id', modifyTodo);



//export du sous-router
export default router;