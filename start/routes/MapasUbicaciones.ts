import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/MapasUbicaciones','MapasUbicacionesController.index');
    Route.post('/MapasUbicaciones','MapasUbicacionesController.store');
    Route.get('/MapasUbicaciones/:id','MapasUbicacionesController.show');
    Route.put('/MapasUbicaciones/:id','MapasUbicacionesController.update');
    Route.delete('/MapasUbicaciones/:id','MapasUbicacionesController.destroy');
}).middleware(['auth:api','permiso'])