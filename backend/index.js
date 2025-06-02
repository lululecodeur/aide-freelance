const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

// Configuration OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API Pack Juridique fonctionnelle!' });
});

// Route pour générer les CGV
app.post('/generate-pack', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Génère des conditions générales de vente (CGV) complètes et conformes au droit français pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    Les CGV doivent inclure :
    1. Objet et champ d'application
    2. Conditions de commande et de vente
    3. Prix et modalités de paiement
    4. Livraison et transfert de propriété
    5. Garanties
    6. Responsabilité
    7. Droit de rétractation (si applicable)
    8. Protection des données personnelles
    9. Droit applicable et juridiction compétente
    
    Formate le texte de manière claire et professionnelle.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un expert juridique français spécialisé dans la rédaction de documents commerciaux conformes au droit français.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const cgv = completion.choices[0].message.content;

    res.json({
      message: 'CGV générées avec succès!',
      cgv: cgv,
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la génération des CGV' });
  }
});

// Route pour générer les CGU
app.post('/generate-cgu', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Génère des conditions générales d'utilisation (CGU) complètes et conformes au droit français pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    Les CGU doivent inclure :
    1. Objet des CGU
    2. Accès et utilisation du service
    3. Inscription et compte utilisateur
    4. Obligations de l'utilisateur
    5. Propriété intellectuelle
    6. Données personnelles et RGPD
    7. Responsabilité et garanties
    8. Suspension et résiliation
    9. Droit applicable et juridiction
    
    Formate le texte de manière claire et professionnelle.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un expert juridique français spécialisé dans la rédaction de documents numériques conformes au droit français.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const document = completion.choices[0].message.content;

    res.json({
      message: 'CGU générées avec succès!',
      document: document,
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la génération des CGU' });
  }
});

// Route pour générer les mentions légales
app.post('/generate-mentions', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Génère des mentions légales complètes et conformes au droit français pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    Les mentions légales doivent inclure :
    1. Identification de l'éditeur
    2. Identification de l'hébergeur
    3. Propriété intellectuelle
    4. Responsabilité
    5. Données personnelles
    6. Cookies
    7. Droit applicable
    
    Formate le texte de manière claire et professionnelle. Utilise des exemples génériques pour les informations spécifiques (adresse, SIRET, etc.) qui devront être complétées.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un expert juridique français spécialisé dans la conformité des sites web.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const document = completion.choices[0].message.content;

    res.json({
      message: 'Mentions légales générées avec succès!',
      document: document,
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la génération des mentions légales' });
  }
});

// Route pour générer la politique RGPD
app.post('/generate-rgpd', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Génère une politique de confidentialité RGPD complète et conforme pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    La politique RGPD doit inclure :
    1. Identité du responsable de traitement
    2. Types de données collectées
    3. Finalités du traitement
    4. Base légale du traitement
    5. Destinataires des données
    6. Durée de conservation
    7. Droits des personnes concernées
    8. Sécurité des données
    9. Contact DPO/délégué
    10. Modifications de la politique
    
    Formate le texte de manière claire et professionnelle.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un expert RGPD français spécialisé dans la protection des données personnelles.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const document = completion.choices[0].message.content;

    res.json({
      message: 'Politique RGPD générée avec succès!',
      document: document,
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la génération de la politique RGPD' });
  }
});

// Route pour générer un contrat simple
app.post('/generate-contract', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Génère un contrat de prestation freelance simple et conforme au droit français pour :
    - Prestataire : ${nom}
    - Activité : ${activite}
    
    Le contrat doit inclure :
    1. Identification des parties
    2. Objet de la prestation
    3. Obligations du prestataire
    4. Obligations du client
    5. Modalités d'exécution
    6. Rémunération et modalités de paiement
    7. Durée et résiliation
    8. Propriété intellectuelle
    9. Confidentialité
    10. Responsabilité et garanties
    11. Force majeure
    12. Droit applicable et juridiction
    
    Formate le texte comme un contrat professionnel avec des clauses claires.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un expert juridique français spécialisé dans les contrats de prestation de services.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const document = completion.choices[0].message.content;

    res.json({
      message: 'Contrat généré avec succès!',
      document: document,
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la génération du contrat' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
