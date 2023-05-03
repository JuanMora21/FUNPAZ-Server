import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/RolesPermisos','RolesPermisosController.index');
    Route.post('/RolesPermisos','RolesPermisosController.store');
    Route.get('/RolesPermisos/:id','RolesPermisosController.show');
    Route.put('/RolesPermisos/:id','RolesPermisosController.update');
    Route.delete('/RolesPermisos/:id','RolesPermisosController.destroy');
}).middleware(['auth:api','permiso'])