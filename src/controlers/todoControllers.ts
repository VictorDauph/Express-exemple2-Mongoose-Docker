import { Request, Response } from "express";

let todos = [
    { id: 1, task: "Faire les courses", completed: false },
    { id: 2, task: "Étudier Node.js", completed: true },
];

export function getAllTodos(req: Request, res: Response) {

    res.send(todos)

}