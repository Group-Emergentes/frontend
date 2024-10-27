AHaron-Frontend/
├── README.md
├── angular.json
├── tsconfig.json
├── package.json
├── .env
├── .gitignore
└── src/
├── app/
│   ├── core/                  # Funcionalidades esenciales y servicios de nivel global
│   │   ├── services/          # Servicios compartidos (e.g., auth.service.ts, api.service.ts)
│   │   ├── guards/            # Guardas de rutas (e.g., auth.guard.ts)
│   │   ├── interceptors/      # Interceptores HTTP (e.g., auth.interceptor.ts)
│   │   ├── models/            # Modelos e interfaces compartidos (e.g., user.model.ts)
│   │   └── constants/         # Constantes y configuraciones
│   ├── shared/                # Componentes, pipes, y directivas reutilizables
│   │   ├── components/        # Componentes reutilizables (e.g., button, modal)
│   │   ├── pipes/             # Pipes personalizados
│   │   ├── directives/        # Directivas personalizadas
│   │   └── utilities/         # Funciones y utilidades
│   ├── features/              # Módulos específicos de la aplicación
│   │   ├── dashboard/         # Módulo del panel principal
│   │   │   ├── components/    # Componentes exclusivos del dashboard
│   │   │   ├── services/      # Servicios del dashboard
│   │   │   └── pages/         # Páginas principales del dashboard
│   │   ├── irrigation/        # Módulo para la gestión de zonas de riego
│   │   │   ├── components/    # Componentes de riego (configuración, visualización)
│   │   │   ├── services/      # Servicios específicos de riego
│   │   │   └── pages/         # Páginas de gestión de zonas de riego
│   │   ├── alerts/            # Módulo de alertas y notificaciones
│   │   │   ├── components/    # Componentes de alertas
│   │   │   ├── services/      # Servicios de alertas
│   │   │   └── pages/         # Páginas de configuración de alertas
│   │   ├── auth/              # Módulo de autenticación (login, registro)
│   │   │   ├── components/    # Componentes de autenticación
│   │   │   ├── services/      # Servicios de autenticación
│   │   │   └── pages/         # Páginas de autenticación
│   │   └── settings/          # Módulo de configuración de usuario/sistema
│   │       ├── components/    # Componentes de configuración
│   │       ├── services/      # Servicios de configuración
│   │       └── pages/         # Páginas de configuración
├── assets/                    # Archivos estáticos como imágenes y estilos
│   ├── images/                # Imágenes de la aplicación
│   ├── icons/                 # Íconos SVG o PNG
│   └── styles/                # Estilos globales (e.g., themes.scss, variables.scss)
└── environments/              # Configuraciones de entorno
├── environment.prod.ts
└── environment.ts
