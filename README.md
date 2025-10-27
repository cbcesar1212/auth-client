# auth-client
Cliente de autenticación con React + Vite.

## Descripción
Aplicación frontend que permite la autenticación de usuarios con registro, inicio de sesión y visualización del perfil. Se conecta a un backend REST seguro usando JWT almacenado en cookies HttpOnly.

## Características
- Registro de usuarios
- Login con validación
- Contexto global de autenticación
- Protección de rutas privadas
- Cookies seguras para manejo de JWT
- Tailwind CSS para estilos
- Axios para consumo de API
- Navegación con React Router DOM

## Tecnologías utilizadas
- **React 18**
- **Vite**
- **Axios**
- **React Router DOM**
- **Context API**
- **Tailwind CSS**

## Requisitos previos
- Node.js 18+
- Backend operativo con rutas de autenticación

## Instalación y ejecución
```bash
# Clonar repositorio
git clone https://github.com/cbcesar1212/auth-client.git

# Entrar a la carpeta del proyecto
cd auth-client

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
