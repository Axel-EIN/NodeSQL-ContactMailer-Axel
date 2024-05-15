import express from 'express';
import cors from 'cors';
import contactRoutes from './src/routes/contact.route.js';
import env from './src/config/env.js';

// Configuration de la BDD
import './src/models/index.js';

// Création serveur nodeJs / Express
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/contact', contactRoutes);

const PORT = env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`API ouverte à l'URL http://localhost:${PORT}`);
})