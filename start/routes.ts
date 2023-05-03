/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {
  Route.post('/login', 'SeguridadController.login');
  Route.post('/logout', 'SeguridadController.logout').middleware('auth');
  Route.post('/forgot-password', 'SeguridadController.forgotPassword');
  Route.post('/reset-password', 'SeguridadController.resetPassword').middleware('auth');
});

//Roles del sistema
import './routes/Administradores'
import './routes/GestoresContenidos'
import './routes/Profesionales'
import './routes/Pacientes'
import './routes/Usuarios'
import './routes/Permisos'
import './routes/Roles'
import './routes/UsuariosPermisos'
import './routes/ProfesionalesServicios'


//Entidades del sistema
import './routes/Eps'
import './routes/EpsInfo'
import './routes/Citas'
import './routes/Comentarios'
import './routes/Testimonios'
import './routes/Servicios'
import './routes/Publicaciones'
import './routes/Multimedias'
import './routes/Mapas'
import './routes/Ubicaciones'
import './routes/Entidades'
import './routes/EntidadesMultimedia'
import './routes/MapasUbicaciones'


