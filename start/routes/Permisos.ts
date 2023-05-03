import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Permisos','PermisosController.index');
    Route.post('/Permisos','PermisosController.store');
    Route.get('/Permisos/:id','PermisosController.show');
    Route.put('/Permisos/:id','PermisosController.update');
    Route.delete('/Permisos/:id','PermisosController.destroy');
}).middleware(['auth:api','permiso'])