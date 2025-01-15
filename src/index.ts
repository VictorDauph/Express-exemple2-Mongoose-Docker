import express from 'express';
import testRoutes from './routes/testRoutes';
import todoRoutes from './routes/todoRoutes';

//Création d'un serveur Express
const app = express();
//Définition du port du serveur
const PORT = 3000;
console.log("lancement du serveur")
//Config du serveur par défaut
app.use(express.json());

//TODO ajouter ici connection à la BDD

//TODO ajouter ici les routes
app.use('/test', testRoutes)
app.use('/todos', todoRoutes)

//app.listen indique au serveur d'écouter les requêtes HTTP arrivant sur le
//port indiqué
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
