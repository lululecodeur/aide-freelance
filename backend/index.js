// backend/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate-pack', (req, res) => {
  const { nom, activite } = req.body;
  res.json({ message: `Génération du pack pour ${nom}, activité : ${activite}` });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`✅ Backend en ligne sur http://localhost:${PORT}`));
