import mongoose, { Schema, Document } from 'mongoose';

// Définir une interface TypeScript pour le typage
export interface TodoI extends Document {
    task: string;
    completed: boolean;
    addedAt: Date;
}

// Définir le schéma Mongoose
const todoSchema = new Schema<TodoI>({
    task: { type: String, required: true }, // Tâche obligatoire
    completed: { type: Boolean, default: false }, // Tâche non complétée par défaut
    addedAt: { type: Date, default: Date.now }, // Date d'ajout par défaut à l'instant présent
});

// Créer le modèle à partir du schéma
// Exporter le modèle
export default mongoose.model<TodoI>('Todo', todoSchema);
