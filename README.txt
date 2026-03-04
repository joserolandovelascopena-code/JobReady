JobReady/
│
├── docs/
│ ├── index.html ← Página principal (APP MAIN)
│ ├── offline.html ← Página offline
│ │
│ ├── assets/
│ │ ├── css/
│ │ │ └── styles.css
│ │ │
│ │ ├── js/
│ │ │ ├── app.js ← JS principal
│ │ │ ├── router.js ← Si haces navegación dinámica
│ │ │ │
│ │ │ ├── services/
│ │ │ │ ├── api.js
│ │ │ │ ├── authService.js
│ │ │ │ ├── interviewService.js
│ │ │ │ └── certificateService.js
│ │ │ │
│ │ │ └── utils/
│ │ │ └── helpers.js
│ │ │
│ │ └── icons/
│ │
│ ├── pages/
│ │ ├── home.html
│ │ ├── login.html
│ │ ├── register.html
│ │ ├── interviews.html
│ │ ├── cv-generator.html
│ │ ├── courses.html
│ │ ├── progress.html
│ │ ├── certificates.html
│ │ └── admin.html
│ │
│ ├── manifest.json
│ └── service-worker.js
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.js
│ │ │
│ │ ├── controllers/
│ │ │ ├── authController.js
│ │ │ ├── interviewController.js
│ │ │ ├── courseController.js
│ │ │ ├── certificateController.js
│ │ │ └── adminController.js
│ │ │
│ │ ├── routes/
│ │ │ ├── authRoutes.js
│ │ │ ├── interviewRoutes.js
│ │ │ ├── courseRoutes.js
│ │ │ ├── certificateRoutes.js
│ │ │ └── adminRoutes.js
│ │ │
│ │ ├── services/
│ │ │ ├── certificateService.js
│ │ │ ├── evaluationService.js
│ │ │ └── pdfService.js
│ │ │
│ │ ├── middleware/
│ │ │ ├── authMiddleware.js
│ │ │ └── roleMiddleware.js
│ │ │
│ │ └── app.js
│ │
│ └── package.json
│
├── docs/
│ └── diagramas/
│
└── README.md
