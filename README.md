# Recetario Digital

Aplicación web desarrollada con Angular y Firebase que permite a los usuarios registrar, visualizar y gestionar recetas de cocina. Incluye autenticación, operaciones CRUD y funcionalidades interactivas.


## Tecnologías utilizadas

- Angular Standalone v20
- Firebase Firestore
- Firebase Authentication
- Firebase Hosting
- AngularFire
- Angular Material


## Requisitos para instalar y ejecutar
1. Tener Node.js y Angular CLI instalados
2. Clona el repositorio: `git clone https://github.com/rous23-sn/recetario-digital.git`
3. Instala dependencias: `npm install`
4. Ejecuta localmente: `ng serve`



## Arquitectura del Proyecto

- `inicio`: Página principal de bienvenida
- `recetas`: Muestra todas las recetas
- `rapidas`: Filtra recetas rápidas (< 20 min)
- `agregar-receta`: Crear nueva receta (autenticado)
- `login` y `registro`: Autenticación de usuarios
- `detalle-receta`: Vista detallada por ID
- `services/`: Contiene `auth.service.ts` y `recetas.service.ts`


## Deploy Firebase

Project Console: https://console.firebase.google.com/project/recetario-digital-c0d49/overview

Hosting URL: https://recetario-digital-c0d49.web.app


##  Video de Demostración

 [Video del proyecto](pendiente)



Desarrollado por mi  **Rosmery Sicha Navarro**  
Curso: *Programación Web con Angular - 2025*


