const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

console.log(
  'API Key loaded:',
  process.env.OPENAI_API_KEY
    ? 'Yes (ends with: ' + process.env.OPENAI_API_KEY.slice(-4) + ')'
    : 'No'
);

const app = express();
const port = process.env.PORT || 3003;

// Configuration OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://aide-freelance.vercel.app',
      'https://*.vercel.app',
      'https://cgv-freelance.fr',
      'https://www.cgv-freelance.fr',
    ],
    credentials: true,
  })
);
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API Pack Juridique fonctionnelle!' });
});

// Route pour générer les CGV
// Route pour générer les mentions légales - CORRIGÉE
app.post('/generate-mentions', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Rédige des mentions légales complètes et conformes au droit français pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    IMPORTANT : 
    - N'utilise JAMAIS de markdown (pas de **, ##, etc.)
    - Utilise uniquement du texte brut avec des MAJUSCULES pour les titres
    - Remplis TOUS les contenus, ne laisse AUCUN [à compléter] vide
    - Écris le contenu complet de chaque section
    
    Rédige le document complet avec cette structure :
    
    MENTIONS LEGALES
    
    1. IDENTIFICATION DE L'EDITEUR
    
    Nom : ${nom}
    Activité : ${activite}
    Adresse : [Adresse complète à compléter]
    Téléphone : [Numéro à compléter]
    Email : [Email à compléter]
    SIRET : [Numéro SIRET à compléter]
    
    2. IDENTIFICATION DE L'HEBERGEUR
    
    Écris ici un paragraphe complet sur l'obligation d'identifier l'hébergeur, les coordonnées type à fournir, et les responsabilités légales.
    
    3. PROPRIETE INTELLECTUELLE
    
    Écris ici un paragraphe complet sur la protection des contenus du site, les droits d'auteur, les logos, marques, et les conditions d'utilisation du contenu.
    
    4. RESPONSABILITE
    
    Écris ici un paragraphe complet sur les limitations de responsabilité de ${nom}, les exclusions de garantie, et les conditions d'utilisation du site.
    
    5. DONNEES PERSONNELLES
    
    Écris ici un paragraphe complet sur la collecte et le traitement des données personnelles, conforme au RGPD, pour l'activité ${activite}.
    
    6. COOKIES
    
    Écris ici un paragraphe complet sur l'utilisation des cookies, les types de cookies utilisés, et les droits des utilisateurs.
    
    7. DROIT APPLICABLE
    
    Écris ici un paragraphe complet sur le droit français applicable et la juridiction compétente en cas de litige.
    
    ÉCRIS LE CONTENU COMPLET DE CHAQUE SECTION - PAS DE [Contenu détaillé] !`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un juriste français expert en droit des sites web. Tu rédiges des mentions légales conformes et complètes en français, sans markdown. Tu remplis TOUJOURS le contenu complet de chaque section, tu ne laisses JAMAIS de placeholder vide.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.2,
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
// Route pour générer les CGU
app.post('/generate-cgu', async (req, res) => {
  try {
    const { nom, activite } = req.body;

    if (!nom || !activite) {
      return res.status(400).json({ error: 'Nom et activité requis' });
    }

    const prompt = `Rédige des conditions générales d'utilisation (CGU) complètes et conformes au droit français pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    IMPORTANT : 
    - N'utilise JAMAIS de markdown (pas de **, ##, etc.)
    - Utilise uniquement du texte brut avec des MAJUSCULES pour les titres
    - Numérote clairement les articles
    - Adapte spécifiquement au secteur "${activite}"
    
    Structure obligatoire :
    TITRE : CONDITIONS GENERALES D'UTILISATION
    
    ARTICLE 1 - OBJET DES CGU
    [contenu adapté à ${activite}]
    
    ARTICLE 2 - ACCES ET UTILISATION DU SERVICE
    [contenu détaillé]
    
    ARTICLE 3 - INSCRIPTION ET COMPTE UTILISATEUR
    [contenu détaillé]
    
    ARTICLE 4 - OBLIGATIONS DE L'UTILISATEUR
    [contenu détaillé]
    
    ARTICLE 5 - PROPRIETE INTELLECTUELLE
    [contenu détaillé]
    
    ARTICLE 6 - DONNEES PERSONNELLES ET RGPD
    [contenu détaillé]
    
    ARTICLE 7 - RESPONSABILITE ET GARANTIES
    [contenu détaillé]
    
    ARTICLE 8 - SUSPENSION ET RESILIATION
    [contenu détaillé]
    
    ARTICLE 9 - DROIT APPLICABLE ET JURIDICTION
    [contenu détaillé]`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "Tu es un juriste français expert en droit numérique. Tu rédiges des CGU professionnelles en français, sans markdown, adaptées spécifiquement au secteur d'activité mentionné.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2500,
      temperature: 0.2,
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

    const prompt = `Rédige des mentions légales complètes et conformes au droit français pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    IMPORTANT : 
    - N'utilise JAMAIS de markdown (pas de **, ##, etc.)
    - Utilise uniquement du texte brut avec des MAJUSCULES pour les titres
    - Inclus des exemples génériques entre crochets [à compléter]
    
    Structure obligatoire :
    TITRE : MENTIONS LEGALES
    
    1. IDENTIFICATION DE L'EDITEUR
    Nom : ${nom}
    Activité : ${activite}
    Adresse : [Adresse complète à compléter]
    Téléphone : [Numéro à compléter]
    Email : [Email à compléter]
    SIRET : [Numéro SIRET à compléter]
    
    2. IDENTIFICATION DE L'HEBERGEUR
    [Détails hébergeur]
    
    3. PROPRIETE INTELLECTUELLE
    [Contenu détaillé]
    
    4. RESPONSABILITE
    [Contenu détaillé]
    
    5. DONNEES PERSONNELLES
    [Contenu détaillé]
    
    6. COOKIES
    [Contenu détaillé]
    
    7. DROIT APPLICABLE
    [Contenu détaillé]`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un juriste français expert en droit des sites web. Tu rédiges des mentions légales conformes en français, sans markdown, avec des espaces réservés pratiques pour les informations spécifiques.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.2,
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

    const prompt = `Rédige une politique de confidentialité RGPD complète et conforme pour :
    - Nom/Entreprise : ${nom}
    - Activité : ${activite}
    
    IMPORTANT : 
    - N'utilise JAMAIS de markdown (pas de **, ##, etc.)
    - Utilise uniquement du texte brut avec des MAJUSCULES pour les titres
    - Adapte les types de données collectées au secteur "${activite}"
    
    Structure obligatoire :
    TITRE : POLITIQUE DE CONFIDENTIALITE RGPD
    
    1. IDENTITE DU RESPONSABLE DE TRAITEMENT
    ${nom}, spécialisé en ${activite}
    [Coordonnées à compléter]
    
    2. TYPES DE DONNEES COLLECTEES
    [Adapté spécifiquement à l'activité ${activite}]
    
    3. FINALITES DU TRAITEMENT
    [Contenu détaillé adapté]
    
    4. BASE LEGALE DU TRAITEMENT
    [Contenu détaillé]
    
    5. DESTINATAIRES DES DONNEES
    [Contenu détaillé]
    
    6. DUREE DE CONSERVATION
    [Contenu détaillé]
    
    7. DROITS DES PERSONNES CONCERNEES
    [Contenu détaillé complet]
    
    8. SECURITE DES DONNEES
    [Contenu détaillé]
    
    9. CONTACT DPO/DELEGUE
    [Coordonnées à compléter]
    
    10. MODIFICATIONS DE LA POLITIQUE
    [Contenu détaillé]`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "Tu es un expert RGPD français. Tu rédiges des politiques de confidentialité conformes en français, sans markdown, adaptées spécifiquement au secteur d'activité pour identifier les bonnes données collectées.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2500,
      temperature: 0.2,
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

    const prompt = `Rédige un contrat de prestation freelance professionnel et conforme au droit français pour :
    - Prestataire : ${nom}
    - Activité : ${activite}
    
    IMPORTANT : 
    - N'utilise JAMAIS de markdown (pas de **, ##, etc.)
    - Utilise uniquement du texte brut avec des MAJUSCULES pour les titres
    - Adapte les clauses spécifiquement au secteur "${activite}"
    - Inclus des espaces [à compléter] pour les éléments variables
    
    Structure obligatoire :
    TITRE : CONTRAT DE PRESTATION DE SERVICES
    
    ENTRE LES SOUSSIGNES :
    
    D'une part :
    ${nom}, ${activite}
    [Coordonnées à compléter]
    Ci-après dénommé "le Prestataire"
    
    D'autre part :
    [Nom du client à compléter]
    [Coordonnées client à compléter]
    Ci-après dénommé "le Client"
    
    ARTICLE 1 - OBJET DE LA PRESTATION
    [Adapté spécifiquement à ${activite}]
    
    ARTICLE 2 - OBLIGATIONS DU PRESTATAIRE
    [Contenu adapté au secteur]
    
    ARTICLE 3 - OBLIGATIONS DU CLIENT
    [Contenu détaillé]
    
    ARTICLE 4 - MODALITES D'EXECUTION
    [Contenu détaillé]
    
    ARTICLE 5 - REMUNERATION ET MODALITES DE PAIEMENT
    Montant : [À compléter] euros
    [Modalités de paiement]
    
    ARTICLE 6 - DUREE ET RESILIATION
    [Contenu détaillé]
    
    ARTICLE 7 - PROPRIETE INTELLECTUELLE
    [Contenu détaillé adapté à ${activite}]
    
    ARTICLE 8 - CONFIDENTIALITE
    [Contenu détaillé]
    
    ARTICLE 9 - RESPONSABILITE ET GARANTIES
    [Contenu détaillé]
    
    ARTICLE 10 - FORCE MAJEURE
    [Contenu détaillé]
    
    ARTICLE 11 - DROIT APPLICABLE ET JURIDICTION
    [Contenu détaillé]
    
    Fait en deux exemplaires originaux.
    
    Le [Date à compléter]
    
    Le Prestataire                    Le Client
    ${nom}                            [Nom à compléter]`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "Tu es un juriste français expert en contrats de prestation de services. Tu rédiges des contrats professionnels en français, sans markdown, adaptés spécifiquement au secteur d'activité pour inclure les bonnes clauses métier.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2500,
      temperature: 0.2,
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
