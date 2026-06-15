# Portfolio — Ali Ouadi

Portfolio néomorphique de Ali Ouadi (@felonyxbt).

## Structure

```
src/
├── App.jsx                 # Assemblage des sections
├── main.jsx                # Point d'entrée React
├── styles/
│   └── global.css          # Design system & animations
├── hooks/
│   ├── useScrollY.js
│   └── useScrollReveal.js
├── utils/
│   └── scrollTo.js
├── data/
│   ├── navigation.js
│   ├── skills.js
│   └── content.js
└── components/
    ├── layout/
    │   ├── FloatingOrbs.jsx
    │   └── Nav.jsx
    └── sections/
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── About.jsx
        ├── Stack.jsx
        ├── Projects.jsx
        ├── Newsletter.jsx
        └── Footer.jsx
```

## Démarrage

```bash
npm install
npm run dev
```

Build production : `npm run build`
