# FUNPAZ Mental Health Clinic Backend Server

Este repositorio contiene el código fuente del servidor de backend para la clínica de salud mental FUNPAZ. El servidor está desarrollado utilizando Adonis.js y proporciona una API para acceder y administrar los datos de pacientes, médicos y citas.

## Características

- Gestión de pacientes: registro, actualización y eliminación de pacientes.
- Gestión de médicos: registro, actualización y eliminación de médicos.
- Gestión de citas: programación, actualización y cancelación de citas.
- Autenticación de usuarios: inicio de sesión y cierre de sesión de médicos y personal administrativo.
- Autorización y control de acceso basado en roles: acceso a funciones específicas según el rol del usuario.
- Historiales médicos: registro y visualización de historiales médicos de pacientes.

## Requisitos

- Node.js
- Adonis.js
- Base de datos compatible (MySQL, PostgreSQL, SQLite)

## Instalación

1. Clonar el repositorio:

  `git clone https://github.com/yourusername/FUNPAZ-Mental-Health-Clinic.git`
  
2. Entrar en el directorio del proyecto:

  `cd FUNPAZ-Mental-Health-Clinic`
  

3. Instalar las dependencias del proyecto:

  `npm install`

4. Configurar las variables de entorno y la conexión de la base de datos en el archivo `.env`.

5. Ejecutar las migraciones de la base de datos:

  `adonis migration:run`

6. Iniciar el servidor:

  `adonis serve --dev`

El servidor de backend de la clínica de salud mental FUNPAZ ahora debería estar en funcionamiento.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, crea una rama con tus cambios y envía una solicitud de extracción (pull request) para su revisión.

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo LICENSE para obtener más información.


