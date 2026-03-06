Nombre del proyecto: JobReady (Sistema de Preparación Técnica y Simulación Laboral)
Nombre del estudiante: José Rolando Velasco Peña
Fecha: 5 de mar. de 26
Descripción breve del sistema: 
El sistema es una plataforma de preparación técnica orientada a jóvenes bachilleres y
recién graduados que desean ingresar al sector laboral. Su objetivo es brindarles herramientas prácticas
para afrontar procesos de selección, como simulaciones de entrevistas de trabajo y orientación para diseñar
un currículum vitae profesional. De esta manera, busca fortalecer su confianza, mejorar sus habilidades 
y facilitar su desenvolvimiento en el ámbito laboral.


Diagrama de estructura de directorios:

JobReady/
│
├── docs/                     # PWA (Frontend)
│  │
│  ├── index.html
│  ├── offline.html
│  │
│  ├── assets/
│  │  │
│  │  ├── css/
│  │  │   └── styles.css
│  │  │
│  │  ├── js/
│  │  │  │
│  │  │  ├── app.js
│  │  │  ├── router.js
│  │  │  │
│  │  │  ├── config/
│  │  │  │   └── supabase.js      ← conexión Supabase
│  │  │  │
│  │  │  ├── services/
│  │  │  │  │
│  │  │  │  ├── authService.js     ← login / registro
│  │  │  │  ├── userService.js     ← perfil usuario
│  │  │  │  ├── interviewService.js
│  │  │  │  ├── courseService.js
│  │  │  │  ├── progressService.js
│  │  │  │  └── certificateService.js
│  │  │  │
│  │  │  └── utils/
│  │  │      └── helpers.js
│  │  │
│  │  └── icons/
│  │
│  ├── pages/
│  │  │
│  │  ├── auth/
│  │  │   ├── login.html
│  │  │   ├── signup.html
│  │  │   ├── reset-password.html
│  │  │   └── recover.html
│  │  │
│  │  ├── home.html
│  │  ├── interviews.html
│  │  ├── cv-generator.html
│  │  ├── courses.html
│  │  ├── progress.html
│  │  ├── certificates.html
│  │  └── admin.html
│  │
│  ├── manifest.json
│  └── service-worker.js
│
│
├── backend/                 # API Node.js (solo lógica especial)
│  │
│  ├── src/
│  │  │
│  │  ├── config/
│  │  │   └── supabaseClient.js
│  │  │
│  │  ├── controllers/
│  │  │   │
│  │  │   ├── certificateController.js
│  │  │   └── cvController.js
│  │  │
│  │  ├── services/
│  │  │   │
│  │  │   ├── pdfService.js
│  │  │   ├── certificateService.js
│  │  │   └── cvService.js
│  │  │
│  │  ├── routes/
│  │  │   │
│  │  │   ├── certificateRoutes.js
│  │  │   └── cvRoutes.js
│  │  │
│  │  └── server.js
│  │
│  ├── node_modules/
│  │
│  └── package.json
│
│
├── project-docs/
│  └── diagramas/
│
├── .gitignore
└── README.txt