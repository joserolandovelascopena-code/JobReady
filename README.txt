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
    ├── docs/
    │  ├── index.html 
    │  ├── offline.html 
    │  │
    │  ├── assets/
    │  │  ├── css/
    │  │  │  └── app-css
    │  │  │     └── styles.css
    │  │  │
    │  │  ├── js/
    │  │  │  ├── app.js ← JS principal
    │  │  │  ├── router.js 
    │  │  │  │
    │  │  │  ├── services/
    │  │  │  │  ├── api.js
    │  │  │  │  ├── authService.js
    │  │  │  │  ├── interviewService.js
    │  │  │  │  └── certificateService.js
    │  │  │  │
    │  │  │  └── utils/
    │  │  │     └── helpers.js
    │  │  │
    │  │  └── icons/
    │  │     ├── Favicon.png
    │  │     ├── icon-192.png
    │  │     └── icon-512.png
    │  │
    │  ├── pages/
    │  │  ├── auth/
    │  │  │   ├── login.html
    │  │  │   ├── signup.html
    │  │  │   ├── reset-password.html
    │  │  │   └── recover.html
    │  │  │
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
    ├── backend/
    │  ├── src/
    │  │  ├── config/
    │  │  │   └── db.js
    │  │  │
    │  │  ├── controllers/
    │  │  │   ├── authController.js
    │  │  │   ├── interviewController.js
    │  │  │   ├── courseController.js
    │  │  │   ├── certificateController.js
    │  │  │   └── adminController.js
    │  │  │
    │  │  ├── routes/
    │  │  │   ├── authRoutes.js
    │  │  │   ├── interviewRoutes.js
    │  │  │   ├── courseRoutes.js
    │  │  │   ├── certificateRoutes.js
    │  │  │   └── adminRoutes.js
    │  │  │
    │  │  ├── services/
    │  │  │   ├── certificateService.js
    │  │  │   ├── evaluationService.js
    │  │  │   └── pdfService.js
    │  │  │
    │  │  ├── middleware/
    │  │  │   ├── authMiddleware.js
    │  │  │   └── roleMiddleware.js
    │  │  │
    │  │  │
    │  │  └── app.js
    │  ├── node_modules/
    │  │ 
    │  └── package.json
    │
    ├── project-docs/
    │  └── diagramas/
    │
    ├── .gitignore
    │
    └── README.txt




    JobReady/
    │
    ├── docs/
    │  ├── index.html 
    │  ├── offline.html 
    │  │
    │  ├── assets/
    │  │  ├── css/
    │  │  │  └── app-css
    │  │  │     └── styles.css
    │  │  │
    │  │  ├── js/
    │  │  │  ├── app.js ← JS principal
    │  │  │  ├── 
    │  │  │  │
    │  │  │  ├── services/
    │  │  │  │
    │  │  │  └── utils/
    │  │  │
    │  │  └── icons/
    │  │     ├── Favicon.png
    │  │     ├── icon-192.png
    │  │     └── icon-512.png
    │  │
    │  ├── pages/
    │  │  ├── auth/
    │  │  │   ├── login.html
    │  │  │   ├── signup.html
    │  │  │   ├── reset-password.html
    │  │  │   └── recover.html
    │  │  │
    │  │  │    
    │  │  └── home.html   
    │  │
    │  ├── manifest.json
    │  └── service-worker.js
    │
    ├── backend/
    │  ├── src/
    │  │  ├── config/
    │  │  │   └── db.js
    │  │  │
    │  │  ├── controllers/
    │  │  │
    │  │  ├── routes/
    │  │  │
    │  │  ├── services/
    │  │  │
    │  │  ├── middleware/
    │  │  │
    │  │  └── app.js
    │  │
    │  └── package.json
    │
    ├── project-docs/
    │  └── diagramas/
    │
    └── README.txt