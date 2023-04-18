import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/UsuariosPermisos','UsuariosPermisosController.index');
    Route.post('/UsuariosPermisos','UsuariosPermisosController.store');
    Route.get('/UsuariosPermisos/:id','UsuariosPermisosController.show');
    Route.put('/UsuariosPermisos/:id','UsuariosPermisosController.update');
    Route.delete('/UsuariosPermisos/:id','UsuariosPermisosController.destroy');
})//.middleware(['auth:api','permission'])