import { Request, Response } from "express";
import Todo, { TodoI } from "../DBSchemas/todo"
import todo from "../DBSchemas/todo";

export async function getAllTodos(req: Request, res: Response) {

    try {
        // Requête pour récupérer tous les documents dans la collection "todos"
        const todos = await todo.find();

        // Envoyer la liste des todos en réponse
        res.status(200).json(todos);
    } catch (err) {
        console.error('Erreur lors de la récupération des todos:', err);
        res.status(500).json({ message: 'Erreur lors de la récupération des todos' });
    }

}

export async function getfalseTodos(req: Request, res: Response) {

    try {
        // Requête pour récupérer tous les documents dans la collection "todos"
        const todos = await Todo.find({ completed: false });

        // Envoyer la liste des todos en réponse
        res.status(200).json(todos);
    } catch (err) {
        console.error('Erreur lors de la récupération des todos:', err);
        res.status(500).json({ message: 'Erreur lors de la récupération des todos' });
    }

}

export async function createTodo(req: Request, res: Response) {
    try {
        const { task } = req.body;

        // Validation des champs
        if (!task) {
            res.status(400).json({ message: 'Le champs tasks est requis' });
        }

        // Création d'une nouvelle todo
        const newtodo: TodoI = new Todo({ task });

        // Sauvegarde dans la base de données
        const savedTodo = await newtodo.save();
        console.log("savedTodo");
        console.log(savedTodo)

        // Réponse réussie
        res.status(201).json({ message: 'todo créé avec succès', data: savedTodo });

    } catch (err: any) {
        // Gestion des erreurs
        res.status(500).json({ message: 'Erreur interne', error: err.message });
    }
}

export async function modifyTodo(req: Request, res: Response) {
    try {
        const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête

        // Validation des champs 
        if (!id) {
            res.status(400).json({ message: 'ID requis pour mettre à jour une todo' });
            return
        }

        // Mise à jour des champs
        const updatedTodo = await Todo.findByIdAndUpdate(
            id, // ID de l'utilisateur à mettre à jour
            { completed: true }, // Champs à mettre à jour
            { new: true, runValidators: true } // Options : retourner le nouvel utilisateur et valider les données
        );

        if (!updatedTodo) {
            res.status(404).json({ message: 'Todo non trouvée' });
            return
        }

        // Réponse réussie
        res.status(200).json({ message: 'Todo mise à jour avec succès', data: updatedTodo });
    } catch (err: any) {
        // Gestion des erreurs
        res.status(500).json({ message: 'Erreur interne', error: err.message });
    }
}