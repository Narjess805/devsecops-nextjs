const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// ============ MIDDLEWARES ============
// Configuration CORS complète et explicite
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
}));

app.use(express.json());

// ============ DONNÉES ============
const profile = {
  name: 'Narjess Dabbech',
  role: 'Étudiant(e) ingénieur · DevSecOps',
  email: 'narjessdabbech3@gmail.com',
  github: 'https://github.com/Narjess805',
  location: 'Tunisie',
  about: "Passionné(e) par l'automatisation, les conteneurs et la sécurité des chaînes CI/CD."
};

const skills = [
  'Git', 'Docker', 'Jenkins', 'Kubernetes',
  'Ansible', 'Terraform', 'Argo CD'
];

const projects = [
  {
    slug: 'minicv',
    name: 'Mini CV One Page',
    description: 'CV en HTML5/CSS3/JavaScript avec thème clair/sombre.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Narjess805/minicv'
  },
  {
    slug: 'devsecops-portfolio',
    name: 'DevSecOps Portfolio',
    description: 'Portfolio Next.js avec composants réutilisables.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/Narjess805/devsecops-nextjs'
  },
  {
    slug: 'docker-portfolio',
    name: 'Conteneurisation Nginx',
    description: 'Image Docker cv-docker servant le portfolio via Nginx.',
    tech: ['Docker', 'Nginx'],
    link: '#'
  },
  {
    slug: 'jenkins-pipeline',
    name: 'Jenkins Pipeline',
    description: 'Pipeline CI/CD automatisé pour le portfolio.',
    tech: ['Jenkins', 'Git', 'Docker'],
    link: '#'
  }
];

// ============ ROUTES ============

// Route d'accueil (liste les endpoints)
app.get('/', (req, res) => {
  res.json({
    name: 'DevSecOps API',
    version: '1.0.0',
    endpoints: [
      'GET /api/health',
      'GET /api/profile',
      'GET /api/projects',
      'GET /api/projects/:slug',
      'GET /api/skills'
    ]
  });
});

// 30. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API fonctionnelle',
    timestamp: new Date().toISOString()
  });
});

// 31. Profil
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

// 32. Liste des projets
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// 32bis. Détail d'un projet
app.get('/api/projects/:slug', (req, res) => {
  const project = projects.find(p => p.slug === req.params.slug);
  if (!project) return res.status(404).json({ error: 'Projet non trouvé' });
  res.json(project);
});

// 33. Liste des compétences
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// ============ DÉMARRAGE ============
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ API démarrée sur http://0.0.0.0:${PORT}`);
  console.log(`   - GET http://localhost:${PORT}/`);
  console.log(`   - GET http://localhost:${PORT}/api/health`);
  console.log(`   - GET http://localhost:${PORT}/api/profile`);
  console.log(`   - GET http://localhost:${PORT}/api/projects`);
  console.log(`   - GET http://localhost:${PORT}/api/skills`);
});
